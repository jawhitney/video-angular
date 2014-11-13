app.controller('videoController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var video = {};

    $http.get('/api/videos/' + $routeParams.videoId)
        .success(function(data) {
            $scope.video = data[0];
        })
        .error(function(data) {
            console.log('Error: ' + data);  
        });
}]);