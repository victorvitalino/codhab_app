var app = angular.module('codhab.controllers.assistencia_form', []);
app.controller('AssistenciaFormCtrl', function($scope,$ionicPlatform, $ionicConfig, $state,$sce,$filter,$http) {
   $scope.url = $sce.trustAsResourceUrl("http://mobile.codhab.df.gov.br/technical_assistance/pre_registers/new");
});
