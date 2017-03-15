var app = angular.module('codhab.controllers.app', []);
app.controller('AppCtrl', function($scope, $ionicConfig, $state, $http, $cordovaGeolocation, $ionicPlatform) {


  $http.get('http://mobile.codhab.df.gov.br/notifications?cpf=47317841153')
    .success(function (data, status, headers, config) {
      console.log(data);
      $scope.msg = data;
    })
    .error(function (data, status, headers, config) {
      console.log('data error');
    })
    .then(function (result) {
    });

   /** Inicio da antiga geolocalização **/
    $scope.cpf_envio = localStorage['cpf_logado'];
    $cordovaGeolocation.getCurrentPosition({timeout:30000, maximumAge:3000, enableHighAccuracy:false})
    .then(function(position){
     $scope.lat = position.coords.latitude;
     $scope.long = position.coords.longitude;
     window.localStorage['lat'] = $scope.lat;
     window.localStorage['long'] = $scope.long;
     console.log($scope.lat);
   }, function (err){
     alert("Aviso: O aplicativo CODHAB utiliza o GPS para localizar Postos e Entidades. Por favor ative seu GPS.");
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
               desiredAccuracy: 10,
               stationaryRadius: 5,
               distanceFilter:5,
               interval: 60000,
               debug:false,
               notificationTitle: 'CODHAB',
               notificationText: 'ativo',
               stopOnTerminate: false,
               startOnBoot: true,
               stopOnStillActivity: false,
               notificationIconLarge:'icon',
               notificationIconSmall:'icon',
               url: 'http://www.codhab.df.gov.br/lat-lng?cpf='+ $scope.cpf_envio,
               httpHeaders: {
                 'cpf': $scope.cpf_envio
              }
           });

           // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
           backgroundGeolocation.start();

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

            backgroundGeolocation.start();
        }


   	});
});
