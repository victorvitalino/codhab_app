var app = angular.module('codhab.controllers.search', []);
app.controller('SearchCtrl', function($scope, $state, $ionicLoading, $http) {

$scope.searchCPF = function (search) {
    console.log(search)
    $scope.result = "";
    $http.get('http://codhab.localhost.df.gov.br:3000/habitacao/candidato/'+ search.cpf +'.json')
      .success(function(data, status, headers,config){
        console.log(data); // for browser console

        switch (data.civil_state_id) {
          case 1:
            data.civil_state_id = "Solteiro(a)";
            break;
          case 2:
            data.civil_state_id = "Casado(a)";
            break;
          case 3:
            data.civil_state_id = "Desq/Separado";
            break;
          case 4:
            data.civil_state_id = "Viuvo(a)";
            break;
          case 5:
            data.civil_state_id = "Divorciado(a)";
            break;
          case 6:
            data.civil_state_id = "Sep. Jud. Lit";
            break;
          case 7:
            data.civil_state_id = "União Estável";
            break;
        }

        switch (data.special_condition_id) {
          case 1:
            data.special_condition_id = "Sem Condição Especial";
            break;
          case 2:
            data.special_condition_id = "Deficiente";
            break;
        }

        $scope.result = data; // for UI


      })
      .error(function(data, status, headers,config){
        console.log('data error');
      })
      .then(function(result){
        things = result.data;
      });
    }
});
