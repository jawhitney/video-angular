var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })

    .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'videoController'
    });
});

app.controller('homeController', function ($scope) {
    $scope.channels = channels,
    $scope.industries = industries,
    $scope.products = products,
    $scope.videos = [
        { "id": 1, "title": "Video 1", "screenshot": "images/video1.jpg", "day": "Monday", "channel": [1,2], "industry": "Financial Services", "product": "Sales Cloud" },
        { "id": 2, "title": "Video 2", "screenshot": "images/video2.jpg", "day": "Tuesday", "channel": 2, "industry": ["Healthcare & Life Sciences", "High Tech"], "product": "Service Cloud" },
        { "id": 3, "title": "Video 3", "screenshot": "images/video3.jpg", "day": "Wednesday", "channel": 3, "industry": "High Tech", "product": ["Marketing Cloud", "Sales Cloud"] },
        { "id": 4, "title": "Video 4", "screenshot": "images/video4.jpg", "day": "Monday", "channel": [1,2], "industry": "Financial Services", "product": "Sales Cloud" },
        { "id": 5, "title": "Video 5", "screenshot": "images/video5.jpg", "day": "Tuesday", "channel": 2, "industry": ["Healthcare & Life Sciences", "High Tech"], "product": "Service Cloud" },
        { "id": 6, "title": "Video 6", "screenshot": "images/video6.jpg", "day": "Wednesday", "channel": 3, "industry": "High Tech", "product": ["Marketing Cloud", "Sales Cloud"] }
    ],
    $scope.filter = {};

    $scope.filterByProperties = function (video) {
        // Use this snippet for matching with AND
        // var matchesAND = true;

        // for (var prop in $scope.filter) {
        //     if (noSubFilter($scope.filter[prop])) continue;

        //     if (angular.isArray(video[prop])) {
        //         if (!$.inArray(prop, video[prop])) {
        //             matchesOR = false;
        //             break;
        //         }
        //     } else {
        //         if (!$scope.filter[prop][video[prop]]) {
        //             matchesAND = false;
        //             break;
        //         }
        //     }
        // }

        // return matchesAND;

        // Use this snippet for matching with OR
        var matchesOR = true;

        for (var prop in $scope.filter) {
            if (noSubFilter($scope.filter[prop])) continue;

            if (angular.isArray(video[prop])) {
                if (!$.inArray(prop, video[prop])) {
                    matchesOR = false;
                } else {
                    break;
                }
            } else {
                if (!$scope.filter[prop][video[prop]]) {
                    matchesOR = false;
                } else {
                    break;
                }
            }
        }
        return matchesOR;
    };
    
    function noSubFilter(subFilterObj) {
        for (var key in subFilterObj) {
            if (subFilterObj[key]) return false;
        }
        return true;
    }
});

app.controller('videoController', function($scope) {
    $scope.message = 'Hello world, I\'m a video.';
});
