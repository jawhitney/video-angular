var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })

    .when('/video/:videoId', {
        templateUrl: 'views/video.html',
        controller: 'videoController'
    });
});
