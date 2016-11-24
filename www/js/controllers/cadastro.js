var app = angular.module('codhab.controllers.cadastro', []);
app.controller('CadastroCtrl', function($scope, $ionicConfig, $state, $cordovaGeolocation, $sce) {

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.lat = window.localStorage['lat'];
  $scope.lon = window.localStorage['long'];
  $scope.url = "http://www.codhab.df.gov.br/candidato/area_restrita/acesso/new?lat="+$scope.lat+'&lon='+$scope.lon;

});
