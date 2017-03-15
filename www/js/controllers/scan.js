var app = angular.module('codhab.controllers.scan', []);

app.controller('ScanCtrl', function ($scope,$cordovaBarcodeScanner,$cordovaInAppBrowser,$http) {


  $scope.scanBarcode = function() {

    cordova.plugins.barcodeScanner.scan(
         function (result) {
            $cordovaInAppBrowser.open(result.text,'_self');
         },
         function (error) {
             alert("Scanning failed: " + error);
         },
         {
             showFlipCameraButton : true, // iOS and Android
             showTorchButton : true, // iOS and Android
             prompt : "Posicione o corretamente o leitor no QRcode", // Android
             formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
         }
      );

    };
});
