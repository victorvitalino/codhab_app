var app = angular.module('codhab.controllers.area', []);
app.controller('AreaCtrl', function($scope,$ionicPlatform, $ionicConfig, $state,$sce,$filter) {


   $scope.cpf_logados = localStorage['cpf_logado'];
   console.log($scope.cpf_logados);
   $scope.url = $sce.trustAsResourceUrl("http://www.codhab.df.gov.br/candidato/area_restrita?cpf="+$scope.cpf_logados);


});
