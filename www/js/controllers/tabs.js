var app = angular.module('codhab.controllers.tabs', []);
app.controller('TabsCtrl', function($scope,$ionicPlatform, $ionicConfig, $state, $cordovaGeolocation, $http) {


     /* Verifico se existe um cpf no localStorage para fazer a mudança dos tabs*/
  // $scope.tabsz = window.localStorage['cpf_logado'];
  // if($scope.tabsz === undefined || $scope.tabsz === null || $scope.tabsz === '' || $scope.tabsz === ' ' ){
  //   $scope.tabswitch = '1';
  // } else {
  //   $scope.tabswitch = '2';
  // }

  $scope.check = function(){
    // $scope.tabsz = window.localStorage['cpf_logado'];
    if(window.localStorage['cpf_logado'] === undefined || window.localStorage['cpf_logado'] === null || window.localStorage['cpf_logado'] === '' || window.localStorage['cpf_logado'] === ' '){
      return true;
    }else{
      return false;
    }
  }

});
