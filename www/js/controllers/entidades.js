var app = angular.module('codhab.controllers.entidades',[]);
app.controller('EntidadesCtrl', function($scope, $state, $ionicLoading, $http) {


$scope.searchCPF = function (search) {
    console.log(search)
    $scope.result = "";
    $http.get('http://codhab.localhost.df.gov.br:3000/entidades/entidades_anteriores.json?cnpj=&status=&name_entity='+ search.cpf)
      .success(function(data, status, headers,config){
        console.log(data);
        $scope.result = data;
      })
      .error(function(data, status, headers,config){
        console.log('data error');
      })
      .then(function(result){
        things = result.data;
      });

    }


});
