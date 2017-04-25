var app = angular.module('codhab.controllers.entidades',[]);
app.controller('EntidadesCtrl', function($scope, $state, $stateParams, $ionicLoading, $cordovaGeolocation, $http, EntidadesService) {
  $scope.searchCPF = function (search) {
  EntidadesService.getEntidades(search).then(function(res) {
      $scope.result = res;
      console.log($scope.result)
      });
    }
});
