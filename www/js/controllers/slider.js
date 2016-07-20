var app = angular.module('codhab.controllers.slider', []);

app.controller('sliderCtrl', function ($scope,$state,$ionicSlideBoxDelegate) {

    $scope.startApp = function() {
        $state.go('app.home');
        window.localStorage['tutorial'] = true;
      };


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
