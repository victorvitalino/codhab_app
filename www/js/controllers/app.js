var app = angular.module('codhab.controllers.app', []);
app.controller('AppCtrl', function($scope, $ionicConfig, $state,$cordovaGeolocation, AuthService) {

  $scope.addGeoLocation = function (){
    $cordovaGeolocation.getCurrentPosition({timeout:10000, enableHighAccuracy:true})
    .then(function(position){
     $scope.lat = position.coords.latitude;
     $scope.long = position.coords.longitude;
     window.localStorage['lat'] = $scope.lat;
     window.localStorage['long'] = $scope.long;
     console.log($scope.lat);
   }, function (err){
     console.log(err);
   });
  }
});
