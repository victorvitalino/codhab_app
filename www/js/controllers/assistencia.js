var app = angular.module('codhab.controllers.assistencia',[]);
app.controller('AssistenciaCtrl', function($scope, $state, $ionicLoading, $http, PostosService) {
  $ionicLoading.show({
    content: 'Loading',
    template: '<img src="img/codhabgif0.1.gif" alt="" width=50" height="50" />',
    animation: 'fade-in',
    showBackdrop: false ,
    maxWidth: 200,
    showDelay: 0
  });

$scope.postos = [];
  $http.get("http://www.codhab.df.gov.br/assistencia.json")
  .success(function (data, status, headers, config){
    console.log(data)
    for (var k in data){
      if (k == 'data'){
        var y = data[k];
        console.log(y)
        $scope.postos = y;
        $ionicLoading.hide();
      }
    }

   }).error(function(data, status, headers, config){
   }).then(function(result){
  });


  $scope.chamar = function ( phonenumber ) {
    var call = "tel:" + phonenumber;
    document.location.href = call;
  }
  $scope.email = function ( end ) {
    var email = "mailto:"+ end;
    document.location.href = email;
  }

});
