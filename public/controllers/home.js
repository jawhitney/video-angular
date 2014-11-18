app.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $scope.days = days;
    $scope.channels = channels;
    $scope.industries = industries;
    $scope.products = products;
    $scope.itemsPerPage = 9;
    
    $http.get('/api/videos')
        .success(function(data) {
            $scope.videos = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);  
        });

    $scope.filter = {};

    $scope.filterByProperties = function (video) {
        var matches = true;

        for (var prop in $scope.filter) {
            if (noSubFilter($scope.filter[prop])) continue;

            if (!$scope.filter[prop][video[prop]]) {
                if (!angular.isArray(video[prop])) {
                    matches = false;
                    break;
                } else {
                    for (var key in video[prop]) {
                        if ($scope.filter[prop][video[prop][key]]) {
                            matches = true;
                            break;
                        } else {
                            matches = false;
                        }
                    }
                }
            }
        }        

        return matches;
    };

    $scope.loadMore = function() {
        $scope.itemsPerPage += 9;
    };

    $scope.nextPageDisabledClass = function() {
        if ($scope.filtered && $scope.videos) {
            return $scope.filtered.length < $scope.itemsPerPage ? 'ng-hide' : '';
        }
    };
    
    function noSubFilter(subFilterObj) {
        for (var key in subFilterObj) {
            if (subFilterObj[key]) return false;
        }
        return true;
    };
}]);