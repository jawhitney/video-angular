var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.channels = [
        { "name": 1 },
        { "name": 2 },
        { "name": 3 }
    ];

    $scope.industries = [
        { "name": "Financial Services" },
        { "name": "Healthcare & Life Sciences" },
        { "name": "High Tech" },
        { "name": "Higher Education" },
        { "name": "Manufacturing" },
        { "name": "Non-Profit" },
        { "name": "Retail & Consumer Goods" }
    ];

    $scope.products = [
        { "name": "Sales Cloud" },
        { "name": "Service Cloud" },
        { "name": "Marketing Cloud" },
        { "name": "Salesforce1 Platform" },
        { "name": "Analytics Cloud" },
        { "name": "App Exchange" },
        { "name": "Community Cloud" },
        { "name": "Data.com" },
        { "name": "Desk.com" },
        { "name": "Force.com" },
        { "name": "Heroku" },
        { "name": "Pardot" },
        { "name": "Premier Success" },
        { "name": "Salesforce Chatter" },
        { "name": "Salesforce Identity" },
        { "name": "Salesforce Sandbox" },
        { "name": "Salesforce1 Mobile" },
        { "name": "Work.com" }
    ];

    $scope.videos = [
        { "id": 1, "title": "Video 1", "screenshot": "images/video1.jpg", "day": "Monday", "channel": [1,2], "industry": "Financial Services", "product": "Sales Cloud" },
        { "id": 2, "title": "Video 2", "screenshot": "images/video2.jpg", "day": "Tuesday", "channel": 2, "industry": ["Healthcare & Life Sciences", "High Tech"], "product": "Service Cloud" },
        { "id": 3, "title": "Video 3", "screenshot": "images/video3.jpg", "day": "Wednesday", "channel": 3, "industry": "High Tech", "product": ["Marketing Cloud", "Sales Cloud"] },
        { "id": 4, "title": "Video 4", "screenshot": "images/video4.jpg", "day": "Monday", "channel": [1,2], "industry": "Financial Services", "product": "Sales Cloud" },
        { "id": 5, "title": "Video 5", "screenshot": "images/video5.jpg", "day": "Tuesday", "channel": 2, "industry": ["Healthcare & Life Sciences", "High Tech"], "product": "Service Cloud" },
        { "id": 6, "title": "Video 6", "screenshot": "images/video6.jpg", "day": "Wednesday", "channel": 3, "industry": "High Tech", "product": ["Marketing Cloud", "Sales Cloud"] }
    ];

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
