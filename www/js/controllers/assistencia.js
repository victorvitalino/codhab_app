var app = angular.module('codhab.controllers.assistencia',[]);
app.controller('AssistenciaCtrl', function($scope, $state, $ionicLoading, $http, PostosService) {


    $scope.postos = [];
    PostosService.getPostos().then(function(res) {
        $scope.postos = res;
    });
});
