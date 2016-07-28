var app = angular.module('codhab.controllers.assistencia',[]);
app.controller('AssistenciaCtrl', function($scope, $state, $ionicLoading, $http, PostosService) {

  $scope.chamar = function ( phonenumber ) {
    var call = "tel:" + phonenumber;
    document.location.href = call;
  }
  $scope.email = function ( end ) {
    var email = "mailto:"+ end;
    document.location.href = email;
  }
    $scope.postos = [];
    PostosService.getPostos().then(function(res) {
        $scope.postos = res;
    console.log($scope.postos)
    });
});
