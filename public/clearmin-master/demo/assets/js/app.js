var app = angular.module('app', []);

app.controller('myDashboardController', myDashboardController);


function myDashboardController($scope, $http) {


    $scope.init = function () {
        debugger;
        $scope.cityList = ["Cleveland", "Las Vegas", "Pittsburgh", "Toronto", "Charlotte"];
        $scope.cbCities = {
            "Cleveland": true,
            "Las Vegas": false,
            "Pittsburgh": false,
            "Toronto": false,
            "Charlotte": false
        };
        // $http.get('/api/initbsu')
        //     .success(function (data) {
        //         debugger;
        //         console.log(data);
        //     })
        //     .error(function (data) {
        //         debugger;
        //         console.log('Error: ' + data);
        //     });

        $scope.getBarCharData($scope.cbToList($scope.cbCities));
        $scope.getHistogramData({
            "4JNXUYY8wbaaDmk3BPzlWw": "Mon Ami Gabi",
            "yQab5dxZzgBLTEHCw9V7_w": "Charlotte Douglas International Airport"
        });

        $scope.getPieCharData(["Restaurants", "Chinese"], '#d1-c1', 'Chinese Restaurents', $scope.d1c1);
        $scope.getPieCharData(["Restaurants", "Japanese"], '#d1-c3', 'Chinese Restaurents', $scope.d1c3);
        $scope.getPieCharData(["Restaurants", "Korean"], '#d1-c2', 'Chinese Restaurents', $scope.d1c2);
        $scope.getPieCharData(["Restaurants", "Thai"], '#d1-c01', 'Chinese Restaurents', $scope.d1c01);

    };
    $scope.makeMyDonutChart = (selector, data, title) => {
        return c3.generate({
            bindto: selector,
            data: {
                columns: data,
                type: 'pie',
                onclick: function (d, i) {
                    console.log("onclick", d, i);
                },
                onmouseover: function (d, i) {
                    console.log("onmouseover", d, i);
                },
                onmouseout: function (d, i) {
                    console.log("onmouseout", d, i);
                }
            },
            donut: {
                title: title
            }
        });

    };


    $scope.pullData = function () {
        debugger;
        $scope.getBarCharData($scope.cbToList($scope.cbCities));
    };

    $scope.cbToList = function (cb) {
        var l = [];
        for (city in cb) {
            if (cb[city] === true)
                l.push(city);
        }
        return l;
    };

    $scope.getPieCharData = function (categories, selector, title, target) {
        $http({
            url: '/countstarsbycategories',
            method: "GET",
            params: {
                categories: categories
            }
        }).success(function (resp) {
            debugger;
            console.log(resp);
            //var categories = ["<2", "2", "3", "4", "5"];
            $scope[selector.replace("#", "").replace("-", "")] = $scope.makeMyDonutChart(selector, resp, title);

        }).error(function (data) {
            debugger;
            console.log('Error: ' + data);
            return null;
        });
    };

    $scope.makeMyBarChart = function (selector, chartType, colors, legend, charData, categories, labels) {
        debugger;
        return c3.generate({
            bindto: selector,
            data: {
                columns: charData,
                type: chartType
            },
            axis: {
                x: {
                    type: 'category',
                    categories: categories,
                    label: {
                        text: labels.x,
                        position: 'outer-right'
                    }
                },
                y: {
                    categories: categories,
                    label: {
                        text: labels.y,
                        position: 'outer-center'
                    }
                }

            },
            bar: {
                width: {
                    ratio: 0.9 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            },
            legend: {
                show: legend,
                position: 'inset'
            },
        });

    };


    $scope.getBarCharData = function (cities) {
        $http({
            url: '/countstarsincities',
            method: "GET",
            params: {
                cities: cities
            }
        }).success(function (resp) {
            debugger;
            console.log(resp);
            var categories = ["<2", "2", "3", "4", "5"];
            $scope.d1c5 = $scope.makeMyBarChart('#d1-c5', 'bar', ['#1abc9c', '#3498db', '#10011', '#00011', '#20011'], true, resp, categories, {
                x: "Stars",
                y: "Number of Business"
            });

        }).error(function (data) {
            debugger;
            console.log('Error: ' + data);
        });
    };

    $scope.getHistogramData = function (businessDatas) {
        $http({
            url: '/checkinforhistogram',
            method: "GET",
            params: {
                businessDatas: businessDatas
            }
        }).success(function (resp) {
            debugger;
            console.log(resp);
            var categories = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
            $scope.d1c4 = $scope.makeMyBarChart('#d1-c4', 'bar', ['#1abc9c', '#10011'], true, resp, categories, {
                x: "Hour",
                y: "Number of Visit"
            });
        }).error(function (data) {
            debugger;
            console.log('Error: ' + data);
        });

    };
//localhost:8881/countstarsincities?cites=["Cleveland","Las Vegas","Pittsburgh","Toronto","Charlotte"]
};