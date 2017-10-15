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
        })
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

    $scope.getMajors = function () {
        debugger;
        $scope.selectedcuid = chinaUkeyMap[$scope.selectedU];
        $scope.majorDataAvaliable = false;

        $http({
            url: '/api/majorunderchinaU',
            method: "GET",
            params: {
                cuid: $scope.selectedcuid
            }
        }).success(function (data) {
            debugger;
            $scope.ddlCUMajor = data.keyValPair;
            $scope.CUMajorDict = data.dict;
            $scope.majorDataAvaliable = true;

            console.log(data);
        }).error(function (data) {
            debugger;
            console.log('Error: ' + data);
        });
    };
    $scope.makeMyBarChart = function (selector, chartType, colors, legend, charData, categories) {
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
                    categories: categories
                }
            },
            bar: {
                width: {
                    ratio: 0.8 // this makes bar width 50% of length between ticks
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
            var categories = ["0", "1", "2", "3", "4", "5"];
            $scope.d1c5 = $scope.makeMyBarChart('#d1-c5', 'bar', ['#1abc9c', '#3498db', '#10011', '#00011', '#20011'], true, resp, categories);

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
            $scope.d1c4 = $scope.makeMyBarChart('#d1-c4', 'bar', ['#1abc9c', '#10011'], true, resp, categories);
        }).error(function (data) {
            debugger;
            console.log('Error: ' + data);
        });

    };
//localhost:8881/countstarsincities?cites=["Cleveland","Las Vegas","Pittsburgh","Toronto","Charlotte"]
};