var app = angular.module('codhab.controllers.scan', []);

app.controller('ScanCtrl', function ($scope,$cordovaBarcodeScanner) {

  $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        },{
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE" // default: all but PDF_417 and RSS_EXPANDED

      });
    };
});
