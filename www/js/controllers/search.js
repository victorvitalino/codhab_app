var app = angular.module('codhab.controllers.search', []);
app.controller('SearchCtrl', function ($scope, $state, $ionicLoading, $http) {

  $scope.bookmark = function(search){
  localStorage.setItem("bookmark", search.cpf);
  };
  $scope.searchBookmark = function(){
    var bookmark = localStorage['bookmark'];
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
    if (search.cpf === undefined){
      console.log('error')
    }else{
      console.log(search.cpf)
    }
    $http.get('http://extranet.codhab.df.gov.br/candidato/cadastros/'+ bookmark +'.json?token=eed6a8780692be1675b1bd0f386ca8b0')
      .success(function (data, status, headers, config) {
        var old = moment().diff(moment(data.born), 'years');
        if (old >= 60) {
          data.olds = "Idoso";
        } else {
          data.olds = "Não";
        }
        console.log(data);
        data.bookmark = localStorage['bookmark'];
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
  };
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
    if (search.cpf === undefined){
      console.log('carai')
    }else{
      console.log(search.cpf)
    }
    $http.get('http://extranet.codhab.df.gov.br/candidato/cadastros/'+ search.cpf +'.json?token=eed6a8780692be1675b1bd0f386ca8b0')
      .success(function (data, status, headers, config) {
        var old = moment().diff(moment(data.born), 'years');
        if (old >= 60) {
          data.olds = "Idoso";
        } else {
          data.olds = "Não";
        }
        console.log(data);
        data.bookmark = localStorage['bookmark'];
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
