var app = angular.module('codhab.controllers.portal', []);


app.controller('portalCtrl', function ($scope) {

  $scope.linkPortal = function(url,target,option)
  {
   // Open in external browser
   window.open(url,target,option); 
  };

});
