var app = angular.module('codhab.controllers.app', []);
app.controller('AppCtrl', function($scope, $ionicConfig, $state, $http, $cordovaGeolocation, $ionicPlatform, $ionicPopup) {
  $scope.cpf_toogle = localStorage['cpf_logado']
  $scope.cpf_envio = localStorage['cpf_logado'];

  $scope.doRefresh = function() {

    $http.get('http://mobile.codhab.df.gov.br/notifications?cpf='+localStorage['cpf_logado'])

      .success(function (data, status, headers, config) {
        $scope.msg = data;
      })
      .error(function (data, status, headers, config) {
        console.log('nao enviou');
      })
      .then(function (result) {
      });
    $scope.$broadcast('scroll.refreshComplete');
  }
  $http.get('http://mobile.codhab.df.gov.br/notifications?cpf='+localStorage['cpf_logado'])

    .success(function (data, status, headers, config) {
      $scope.msg = data;
    })
    .error(function (data, status, headers, config) {
      console.log('nao enviou');
    })
    .then(function (result) {
    });

   /** Inicio da antiga geolocalização **/
    $cordovaGeolocation.getCurrentPosition({timeout:30000, maximumAge:3000, enableHighAccuracy:false})
    .then(function(position){
     $scope.lat = position.coords.latitude;
     $scope.long = position.coords.longitude;
     window.localStorage['lat'] = $scope.lat;
     window.localStorage['long'] = $scope.long;
     console.log($scope.lat);
   }, function (err){

   });

   $ionicPlatform.ready(function () {

     document.addEventListener('deviceready', onDeviceReady, false);

     function onDeviceReady () {

           /**
           * This callback will be executed every time a geolocation is recorded in the background.
           */
           var callbackFn = function(location) {
               console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);
               // Do your HTTP request here to POST location to your server.
               // jQuery.post(url, JSON.stringify(location));

               /*
               IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
               and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
               IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
               */

               backgroundGeolocation.finish();
           };

           var failureFn = function(error) {
               console.log('BackgroundGeolocation error');
           };

           // BackgroundGeolocation is highly configurable. See platform specific configuration options
           backgroundGeolocation.configure(callbackFn, failureFn, {
               desiredAccuracy: 1000,
               stationaryRadius:20,
               distanceFilter:5,
               interval: 3600000,
               debug:false,
               notificationTitle: 'CODHAB',
               notificationText: 'ativo',
               stopOnTerminate: false,
               saveBatteryOnBackground: true,
               startOnBoot: false,
               stopOnStillActivity: false,
               notificationIconLarge:'icon',
               notificationIconSmall:'icon',
               url: 'http://www.codhab.df.gov.br/lat-lng?cpf='+ $scope.cpf_envio,
               httpHeaders: {
                 'cpf': $scope.cpf_envio
              }
           });

           // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.

           if($scope.cpf_envio !== undefined && $scope.cpf_envio !== null && $scope.cpf_envio !== '' && $scope.cpf_envio !== ' ' ){
             console.log('iniciou')
             backgroundGeolocation.start();
           }else{
             console.log('terminou')
             backgroundGeolocation.stop();
           }

           // If you wish to turn OFF background-tracking, call the #stop method.
           // backgroundGeolocation.stop();
       }

       document.addEventListener("offline", onOffline, false);
        function onOffline() {
            alert("O aplicativo da CODHAB necessita de conexão com a internet, por favor tente novamente mais tarde.")
            backgroundGeolocation.stop();
        }

        document.addEventListener("online", onOnline, false);
          function onOnline() {

            if($scope.cpf_envio !== undefined && $scope.cpf_envio !== null && $scope.cpf_envio !== '' && $scope.cpf_envio !== ' ' ){
              console.log('iniciou')
              backgroundGeolocation.start();
            }else{
              console.log('terminou')
              backgroundGeolocation.stop();
            }
        }


   	});
});
