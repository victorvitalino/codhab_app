var app = angular.module('codhab.controllers.entidade', []);
app.controller('EntidadeCtrl', function($scope, $state, $stateParams, $cordovaGeolocation, $ionicLoading, $http, EntidadesService) {

  $scope.singleEntidade = function(cnpj) {
      $http.get('http://www.codhab.df.gov.br/entidades/entidades_anteriores.json?cnpj=' + $stateParams.cnpj + '&status=&name_entity=')
        .success(function(data, status, headers, config) {
          $scope.resultado = data[0];
          console.log($scope.resultado)
        })
        .error(function(data, status, headers, config) {
          console.log('data error');
        })
        .then(function(resultado) {
          things = resultado.data[0];
        });
    }

    $scope.check_entidade = function(){
      if(window.localStorage['cnpj_logado'] === undefined || window.localStorage['cnpj_logado'] === null || window.localStorage['cnpj_logado'] === '' || window.localStorage['cnpj_logado'] === ' '){
        return true;
      }else{
        return false;
      }
    }
});
