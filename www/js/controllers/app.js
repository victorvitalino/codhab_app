var app = angular.module('codhab.controllers.app', []);
app.controller('AppCtrl', function($scope, $ionicConfig, $state, $cordovaGeolocation) {

  // document.addEventListener("deviceready", function () {
  //
  //   $cordovaAppVersion.getVersionNumber().then(function (version) {
  //     var appVersion = version;
  //     console.log(appVersion)
  //   });
  // }, false);
  //
  // $cordovaAppVersion.getVersionCode().then(function (build) {
  //   var appBuild = build;
  // });
  //
  //
  // $cordovaAppVersion.getAppName().then(function (name) {
  //   var appName = name;
  // });
  //
  //
  // $cordovaAppVersion.getPackageName().then(function (package) {
  //   var appPackage = package;
  // });

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
});
