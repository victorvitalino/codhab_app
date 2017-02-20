var app = angular.module('codhab.controllers.tabs', []);
app.controller('TabsCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $cordovaGeolocation) {
  $scope.tabsz = window.localStorage['cpf_logado'];

  if($scope.tabsz === undefined || $scope.tabsz === null || $scope.tabsz === '' || $scope.tabsz === ' ' ){
    $scope.tabswitch = '1';
  } else {
    $scope.tabswitch = '2';
  }
  console.log($scope.tabsz);
  console.log($scope.tabswitch);
});
