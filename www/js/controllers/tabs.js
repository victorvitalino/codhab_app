var app = angular.module('codhab.controllers.tabs', []);
app.controller('TabsCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $cordovaGeolocation, $http) {

  /* Envio da localização do usuário logado. Colocado no controler do tabs pois é o controller presente em todo o app*/
     $cordovaGeolocation.getCurrentPosition({timeout:30000, maximumAge:3000, enableHighAccuracy:false})
     .then(function(position){
       $scope.lat = position.coords.latitude;
       $scope.long = position.coords.longitude;
       window.localStorage['lat'] = $scope.lat;
       window.localStorage['long'] = $scope.long;
       $scope.cpf_envio = localStorage['cpf_logado'];
       $http.get("http://www.codhab.df.gov.br/lat-lng?lat="+$scope.lat+'&lng='+$scope.long+'&cpf='+$scope.cpf_envio)
            .success(function (data, status, headers, config){
                console.log(data)
            }).error(function(data, status, headers, config){
                console.log("Erro no envio de latitude e longitude")
            }).then(function(result){
            });
     }, function (err){
       alert("Aviso: O aplicativo CODHAB utiliza o GPS para localizar Postos e Entidades. Por favor ative seu GPS.");
     });



     /* Verifico se existe um cpf no localStorage para fazer a mudança dos tabs*/
  $scope.tabsz = window.localStorage['cpf_logado'];
  if($scope.tabsz === undefined || $scope.tabsz === null || $scope.tabsz === '' || $scope.tabsz === ' ' ){
    $scope.tabswitch = '1';
  } else {
    $scope.tabswitch = '2';
  }
});
