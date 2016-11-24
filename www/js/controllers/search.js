var app = angular.module('codhab.controllers.search', []);
app.controller('SearchCtrl', function ($scope, $state, $ionicLoading, $http) {
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

    // Inicio do segundo search -- position
    // $http.get('http://www.codhab.df.gov.br/habitacao/candidato/' + search.cpf + '/position.json')
    //   .success(function (data2, status, headers, config) {
    //     console.log(data2);
    //     $scope.results = data2;
    //
    //   })
    //   .error(function (data, status, headers, config) {
    //     console.log('data error');
    //             $scope.verify = true;
    //
    //   })
    //   .then(function (results) {
    //     things = results.data2;
    //   });

    // Inicio do terceiro search -- indicação
    // $http.get('http://www.codhab.df.gov.br/habitacao/candidato/' + search.cpf + '/indication.json')
    //   .success(function (data, status, headers, config) {
    //     console.log(data);
    //     $scope.result_indication = data;
    //
    //   })
    //   .error(function (data, status, headers, config) {
    //     console.log('data error');
    //             $scope.verify = true;
    //   })
    //   .then(function (result_indication) {
    //     things = result_indication.data;
    //   });

  }
});
