const {MongoClient, ObjectID} = require('mongodb');
//const dbAddr = 'mongodb://localhost:27017/test';

var dbAddr  = "mongodb://yliu12:0707007@cluster0-shard-00-00-mlvgq.mongodb.net:27017,cluster0-shard-00-01-mlvgq.mongodb.net:27017,cluster0-shard-00-02-mlvgq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
   // "mongodb://yliu0922:0707007@cluster0-shard-00-00-mlvgq.mongodb.net:27017/admin?ssl=true&replicaSet=Mycluster0-shard-0&authSource=admin";


init = (callback) => MongoClient.connect(dbAddr, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });
    module.exports.client = client;
    module.exports.businessCollection = client.collection('business');
    module.exports.checkinCollection = client.collection('checkin');

    callback(err);
    //callback(db);

});
find = (param, callback) => {
    try {
        client.collection('business').find(param)
    } catch (e) {
        callback(e);

    }
};
//db.close();


module.exports = {init, find};