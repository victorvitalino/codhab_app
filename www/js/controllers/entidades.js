var app = angular.module('codhab.controllers.entidades',[]);
app.controller('EntidadesCtrl', function($scope, $state, $stateParams, $ionicLoading, $cordovaGeolocation, $http, EntidadesService) {
  $scope.searchCPF = function (search) {
      EntidadesService.getEntidades(search).then(function(res) {
          $scope.result = res;
          console.log($scope.result)
          });
    }
   $scope.singleEntidade = function (cnpj) {
     $http.get('http://www.codhab.df.gov.br/entidades/entidades_anteriores.json?cnpj='+ $stateParams.cnpj +'&status=&name_entity=')
       .success(function(data, status, headers,config){
         $scope.resultado = data[0];
         console.log($scope.resultado)
       })
       .error(function(data, status, headers,config){
         console.log('data error');
       })
       .then(function(resultado){
         things = resultado.data[0];
       });
   }

   /* mapa TODO  */
});
