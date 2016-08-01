var app = angular.module('codhab.controllers.slider', []);
app.controller('sliderCtrl', function ($scope,$state,$ionicSlideBoxDelegate) {
    $scope.authenticated = false;
    $scope.startApp = function(cpf) {
        $state.go('app.home');
        window.localStorage['tutorial'] = true;
        window.localStorage['cpf'] = cpf;
      };

      $scope.addAuthenticated = function (authenticated){
        if (window.localStorage['tutorial'] === true){
          $scope.authenticated = true;
        }
        console.log($scope.authenticated)
      }

    $scope.slideChanged = function($index) {
      $scope.slideIndex = $index;
     
    };

    // Called to navigate to the main app
    $scope.next = function(index) {
      $ionicSlideBoxDelegate.next();

    };
    $scope.previous = function(index) {
      $ionicSlideBoxDelegate.previous();
      $scope.slideIndex = index;
    };

    $scope.skip = function(){
      $scope.startApp();
    }
    if($scope.slideIndex == 2) {
        $scope.startApp();
        window.localStorage['tutorial'] = true;
    }
});
