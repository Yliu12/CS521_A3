const express = require("express");
const morgan = require("morgan");
var path = require("path");

var app = express();
const port = process.env.PORT || 8881;


const db = require("../db/db");

app.use(morgan("combined"));
//app.use(express.static(path.join(__dirname, "..", "public"))); // set the static files location /public/img will be /img for users
console.log(__dirname);
app.use("/assets", express.static(path.join(__dirname, "../public/clearmin-master/demo/assets")));
app.use(express.static(path.join(__dirname, "../public/clearmin-master/demo")));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname , "../public/clearmin-master/demo/dashboard-sales.html"));
//     //res.render("selectschool.html");
// });
Object.values = (obj) => Object.keys(obj).map(key => obj[key]);


db.init(function (err) {
    if (err)
        throw err;

    db.businessCollection.distinct("categories").then((count) => {
        console.log(count.length);
    }, (err) => {
        console.log("Unable to finde distinct cates", err);
    });
    app.listen(port); //database is initialized, ready to listen for connections


});


app.get("/placetogoin/:city", (req, res) => {
    var reqCity = req.params.city;

    db.businessCollection.find({
        "city": reqCity,
        "stars": {$gt: 4},
        "review_count": {$gt: 99}
    }).sort({"stars": -1}).toArray().then((result) => {
        console.log("/plactogo/in", reqCity, ",found", result.length);
        res.status(200);
        res.send(result);
    }, (err) => {
        res.status(400);
        res.send(err);
    });

});

app.get("/countstarsincities", (req, res) => {
    console.log(req.query.cities);
    var cities = JSON.parse(req.query.cities);

    countStarInCities(cities, (result) => {
        res.status(200);
        res.send(result);
    }, (err) => {
        res.status(400);
        res.send(err);
    });

});
app.get("/checkinforhistogram", (req, res) => {
    console.log(req.query.businessDatas);
    var businessDatas = JSON.parse(req.query.businessDatas);

    parseHisogram(businessDatas, (result) => {
        res.status(200);
        res.send(result);
    }, (err) => {
        res.status(400);
        res.send(err);
    });

});
app.get("/countstarsbycategories", (req, res) => {
    console.log(req.query.categories);
    var categories = JSON.parse(req.query.categories);

    parsePieData(categories, (result) => {
        res.status(200);
        res.send(result);
    }, (err) => {
        res.status(400);
        res.send(err);
    });

});
//["Cleveland","Las Vegas","Pittsburgh","Toronto","Charlotte"]
countStarInCities = (cities, callback) => {
    db.businessCollection.find({
        "city": {$in: cities},
    }).toArray().then((result) => {
        var resVal = {};
        cities.forEach((city) => {
            resVal[city] = [city, 0, 0, 0, 0, 0]
        });
        result.forEach((e) => {
            var stars = parseInt(e["stars"]);
            resVal[e["city"]][stars] += 1;
        });
        callback(Object.values(resVal));
    }, (err) => {
        console.log(err);
        errCallback(err);

    });
};
/*
businessDatas = {bID:'bName'....}
 */
parseHisogram = (businessDatas, callback) => {
    var bIds = Object.keys(businessDatas);

    db.checkinCollection.find({
        "business_id": {$in: bIds},
    }, {"time.Saturday": 1, business_id: 1}).toArray().then((result) => {
        var resVal = [];

        result.forEach((e) => {
            var bCheckin = [];
            bCheckin.push(businessDatas[e.business_id]);
            var checkins = e.time.Saturday;
            for (i = 0; i < 24; i++) {
                bCheckin.push(checkins[i + ":00"]);
            }
            resVal.push(bCheckin);
        });
        callback(resVal);
    }, (err) => {
        console.log(err);

    });
};
parsePieData = (categories, callback) => {
    debugger;
    db.businessCollection.find({
        "categories": {$all: categories},
    }, {"stars": 1}).toArray().then((result) => {
        var resVal = [
            ["1",0],
            ["2",0],
            ["3",0],
            ["4",0],
            ["5",0]
        ];

        result.forEach((e) => {
            var stars = parseInt(e.stars);
            resVal[stars-1][1] += 1;
        });
        callback(resVal);
    }, (err) => {
        console.log(err);

    });
};
