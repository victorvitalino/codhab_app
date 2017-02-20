var app = angular.module('codhab.controllers.app', []);
app.controller('AppCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $cordovaGeolocation,$cordovaBadge) {

   /** Inicio da antiga geolocalização **/

    $cordovaGeolocation.getCurrentPosition({timeout:30000, maximumAge:3000, enableHighAccuracy:false})
    .then(function(position){
     $scope.lat = position.coords.latitude;
     $scope.long = position.coords.longitude;
     window.localStorage['lat'] = $scope.lat;
     window.localStorage['long'] = $scope.long;
     console.log($scope.lat);
     // http://www.codhab.df.gov.br/lat-lng?lat=123&lng=123&cpf=123
   }, function (err){
     alert("Aviso: O aplicativo CODHAB utiliza o GPS para localizar Postos e Entidades. Por favor ative seu GPS.");
   });


  //
  //  var
  //      map,
  //      previousLocation,
  //      locationMarkers = [],
  //      stationaryCircles = [],
  //      currentLocationMarker,
  //      locationAccuracyCircle,
  //      path,
  //      userStartIntent,
  //      isStarted = true,
  //      isLocationEnabled = true,
  //      configHasChanges = true;
  //
  //
  //  /** Inicio da nova geolocalização **/
  //  document.addEventListener("deviceready", onDeviceReady, false);
  //   function onDeviceReady() {
  //     //  console.log('foi')
  //     $cordovaBackgroundGeolocation.start();
  //     var callbackFn = function(location) {
  //           $http({
  //               //request options to send data to server
  //           });
  //         $cordovaBackgroundGeolocation.finish();
  //       },
  //       failureFn = function(error) {
  //         console.log('BackgroundGeoLocation error ' + JSON.stringify(error));
  //       }
  //
  //     backgroundGeolocation.configure(callbackFn, failureFn, {
  //       desiredAccuracy: 10,
  //       stationaryRadius: 20,
  //       distanceFilter: 30,
  //       url: 'http://192.168.81.15:3000/locations',
  //       httpHeaders: { 'X-FOO': 'bar' },
  //       maxLocations: 1000,
  //       // Android only section
  //       locationProvider: 0,
  //       interval: 60000,
  //       fastestInterval: 5000,
  //       activitiesInterval: 10000,
  //       notificationTitle: 'Background tracking',
  //       notificationText: 'enabled',
  //       notificationIconColor: '#FEDD1E',
  //       notificationIconLarge: 'mappointer_large',
  //       notificationIconSmall: 'mappointer_small',
  //     });
  //
  //     $cordovaBackgroundGeolocation.watchLocationMode(
  //       function (enabled) {
  //         if (enabled) {
  //           // location service are now enabled
  //           // call backgroundGeolocation.start
  //           // only if user already has expressed intent to start service
  //           alert('start')
  //         } else {
  //           // location service are now disabled or we don't have permission
  //           // time to change UI to reflect that
  //         }
  //       },
  //       function (error) {
  //         console.log('Error watching location mode. Error:' + error);
  //       }
  //     );
  //
  //     $cordovaBackgroundGeolocation.isLocationEnabled(function (enabled) {
  //       if (enabled) {
  //         $cordovaBackgroundGeolocation.start(
  //           function () {
  //             // service started successfully
  //             // you should adjust your app UI for example change switch element to indicate
  //             // that service is running
  //           },
  //           function (error) {
  //             // Tracking has not started because of error
  //             // you should adjust your app UI for example change switch element to indicate
  //             // that service is not running
  //             if (error.code === 2) {
  //               if (window.confirm('Not authorized for location updates. Would you like to open app settings?')) {
  //                 $cordovaBackgroundGeolocation.showAppSettings();
  //               }
  //             } else {
  //               window.alert('Start failed: ' + error.message);
  //             }
  //           }
  //         );
  //       } else {
  //         // Location services are disabled
  //         if (window.confirm('Location is disabled. Would you like to open location settings?')) {
  //           $cordovaBackgroundGeolocation.showLocationSettings();
  //         }
  //       }
  //     });
  // }
});

// document.addEventListener('deviceready', onDeviceReady, true);
// console.log('inicio')
//  function onDeviceReady () {
//    backgroundGeolocation.configure(callbackFn, failureFn, {
//          desiredAccuracy: 10,
//          stationaryRadius: 20,
//          distanceFilter: 30,
//          url: 'http://192.168.81.15:3000/locations',
//          httpHeaders: { 'X-FOO': 'bar' },
//          maxLocations: 1000,
//          startOnBoot: true,
//          startForeground: true,
//          stopOnTerminate: false,
//          // Android only section
//          locationProvider: backgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
//          interval: 6000,
//          fastestInterval: 5000,
//          activitiesInterval: 10000,
//          notificationTitle: 'Background tracking',
//          notificationText: 'enabled',
//          notificationIconColor: '#FEDD1E',
//          notificationIconLarge: 'mappointer_large',
//          notificationIconSmall: 'mappointer_small'
//      });
//
//      backgroundGeolocation.watchLocationMode(
//        function (enabled) {
//          if (enabled) {
//            console.log('foi')
//            // location service are now enabled
//            // call backgroundGeolocation.start
//            // only if user already has expressed intent to start service
//          } else {
//            // location service are now disabled or we don't have permission
//            // time to change UI to reflect that
//          }
//        },
//        function (error) {
//          console.log('Error watching location mode. Error:' + error);
//        }
//      );
//
//      backgroundGeolocation.isLocationEnabled(function (enabled) {
//        if (enabled) {
//          backgroundGeolocation.start(
//            function () {
//              console.log('foi')
//              // service started successfully
//              // you should adjust your app UI for example change switch element to indicate
//              // that service is running
//            },
//            function (error) {
//              // Tracking has not started because of error
//              // you should adjust your app UI for example change switch element to indicate
//              // that service is not running
//              if (error.code === 2) {
//                if (window.confirm('Not authorized for location updates. Would you like to open app settings?')) {
//                  backgroundGeolocation.showAppSettings();
//                }
//              } else {
//                window.alert('Start failed: ' + error.message);
//              }
//            }
//          );
//        } else {
//          // Location services are disabled
//          if (window.confirm('Location is disabled. Would you like to open location settings?')) {
//            backgroundGeolocation.showLocationSettings();
//          }
//        }
//      });
//      backgroundGeolocation.start();
     // If you wish to turn OFF background-tracking, call the #stop method.
     // backgroundGeolocation.stop();
 // }
