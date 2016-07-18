var app = angular.module('codhab.controllers.searchreg',[]);
app.controller('SearchRegCtrl', function($scope, $state, $ionicLoading, $http) {
$scope.searchCPF = function (search) {
    console.log(search)
    $scope.result = "";
    $http.get('http://www.codhab.df.gov.br/regularizacao/cadastro/'+ search.cpf +'.json')
      .success(function(data, status, headers,config){
        console.log(data); // for browser console

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
