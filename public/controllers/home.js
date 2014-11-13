app.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $scope.days = days;
    $scope.channels = channels;
    $scope.industries = industries;
    $scope.products = products;
    
    $http.get('/api/videos')
        .success(function(data) {
            $scope.videos = data;
        })
        .error(function(data) {
            $scope.videos = [];
            console.log('Error: ' + data);  
        });

    $scope.filter = {};

    $scope.filterByProperties = function (video) {
        var matches = true;

        for (var prop in $scope.filter) {
            if (noSubFilter($scope.filter[prop])) continue;

            if (angular.isArray(video[prop])) {
                if (!$.inArray(prop, video[prop])) {
                    matches = false;
                    break;
                }
            }
            else if (!$scope.filter[prop][video[prop]]) {
                matches = false;
                break;
            }
        }
        return matches;
    };
    
    function noSubFilter(subFilterObj) {
        for (var key in subFilterObj) {
            if (subFilterObj[key]) return false;
        }
        return true;
    }
}]);