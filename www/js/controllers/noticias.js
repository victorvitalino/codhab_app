var app = angular.module('codhab.controllers.noticias', []);

/*********************************************************************
 * NoticiasCtrl
  Controller para carregar todas as noticias da codhab
 *********************************************************************/
app.controller('NoticiasCtrl', function ($scope,$stateParams,$http, $sce, $state, $ionicLoading, $cordovaGeolocation) {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.codhab.df.gov.br/noticias.json')
        .success(function(data, status, headers,config){
          console.log(data);
          $scope.results = data[0].posts;
          $scope.results_sliders = data[0].sliders;
           $ionicLoading.hide();
        })
        .error(function(data, status, headers,config){
          console.log('data error');
           $scope.verify = true;
            $ionicLoading.hide();
        })
        .then(function(results){
          things = results.data;
           $ionicLoading.hide();
        });
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
/*********************************************************************
 * NoticiaCtrl
  Controller para carregar uma noticia especifica da codhab.
 *********************************************************************/
app.controller('NoticiaCtrl', function ($scope,$stateParams,$http, $sce, $ionicLoading,$cordovaGeolocation) {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.codhab.df.gov.br/postagem/'+ $stateParams.id + ".json")
  .success(function(data, status, headers, config){
    console.log(data);
    $scope.noticia = data;
  })
  .error(function(data, status, headers,config){
    console.log('data error');
     $scope.verify = true;
      $ionicLoading.hide();
  })
  .then(function(results){
    things = results.data;
     $ionicLoading.hide();
  });
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
