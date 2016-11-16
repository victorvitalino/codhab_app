var app = angular.module('codhab.controllers.scan', []);

app.controller('ScanCtrl', function ($scope,$cordovaBarcodeScanner,$cordovaInAppBrowser) {

  $scope.scanBarcode = function() {
    var urlnova = "http://www.google.com";
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            // alert(imageData.text);

            $cordovaInAppBrowser.open(imageData.text,'_system');
            console.log(imageData);
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
