var app = angular.module('codhab.controllers.search', []);
app.controller('SearchCtrl', function ($scope, $state, $ionicLoading, $http, $cordovaGeolocation) {

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
});
