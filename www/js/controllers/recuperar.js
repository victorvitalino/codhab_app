var app = angular.module('codhab.controllers.recuperar', []);
app.controller('RecuperarCtrl', function($scope, $ionicConfig, $state, $sce) {

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.url = "http://mobile.codhab.df.gov.br/entity/remember";
console.log($scope.url)
});
