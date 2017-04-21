var app = angular.module('codhab.controllers.area_entidade', []);
app.controller('AreaEntidadeCtrl', function($scope,$ionicPlatform, $ionicConfig, $state,$sce,$filter,$http) {


  $scope.cnpj_logados = localStorage['cnpj_logado']
   $scope.url = $sce.trustAsResourceUrl("http://mobile.codhab.df.gov.br/entity?cnpj="+$scope.cnpj_logados);


});
