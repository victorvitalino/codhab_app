var app = angular.module('codhab.controllers.postos',[]);
app.controller('PostosCtrl', function($scope, $stateParams, PostosService) {
  $scope.posto = {};

  PostosService.getPosto(
     $stateParams.id,
     $stateParams.nome,
     $stateParams.endereco
   ).then(function(res){
      $scope.posto = res;
      console.log($scope.posto)
  });

});
