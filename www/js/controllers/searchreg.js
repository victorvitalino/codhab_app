var app = angular.module('codhab.controllers.searchreg',[]);
app.controller('SearchRegCtrl', function($scope, $state, $ionicLoading, $http) {
  $scope.searchCPF = function (search) {
    $scope.verify = "";
    $scope.result = "";
    $scope.results = "";
    $scope.result_indication = "";
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    console.log(search.cpf)
    $http.get('http://extranet.codhab.df.gov.br/candidato/cadastros/'+ search.cpf +'.json?token=eed6a8780692be1675b1bd0f386ca8b0')
      .success(function (data, status, headers, config) {
        var old = moment().diff(moment(data.born), 'years');
        if (old >= 60) {
          data.olds = "Idoso";
        } else {
          data.olds = "Não";
        }
        console.log(data);

        $scope.result = data;
        $ionicLoading.hide();
      })
      .error(function (data, status, headers, config) {
        console.log('data error');
         $scope.verify = true;
         $ionicLoading.hide();
      })
      .then(function (result) {
        things = result.data;
        $ionicLoading.hide();
      });

      }
});
