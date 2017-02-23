var app = angular.module('codhab.controllers.scan', []);

app.controller('ScanCtrl', function ($scope,$cordovaBarcodeScanner,$cordovaInAppBrowser,$http,$cordovaGeolocation) {

  /* Envio da localização do usuário logado. Colocado no controler do tabs pois é o controller presente em todo o app*/
     $cordovaGeolocation.getCurrentPosition({timeout:30000, maximumAge:3000, enableHighAccuracy:false})
     .then(function(position){
       $scope.lat = position.coords.latitude;
       $scope.long = position.coords.longitude;
       window.localStorage['lat'] = $scope.lat;
       window.localStorage['long'] = $scope.long;
       $scope.cpf_envio = localStorage['cpf_logado'];
       $http.get("http://www.codhab.df.gov.br/lat-lng?lat="+$scope.lat+'&lng='+$scope.long+'&cpf='+$scope.cpf_envio)
            .success(function (data, status, headers, config){
                console.log(data)
            }).error(function(data, status, headers, config){
                console.log("Erro no envio de latitude e longitude")
            }).then(function(result){
            });
     }, function (err){
       alert("Aviso: O aplicativo CODHAB utiliza o GPS para localizar Postos e Entidades. Por favor ative seu GPS.");
     });

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
