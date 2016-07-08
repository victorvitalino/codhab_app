var app = angular.module('codhab.controllers.map', []);
app.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {

    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      //Seta latitude e longitude do mapa (inicio)
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      //opções do mapa
      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var directionsDisplay;
      var directionsService = new google.maps.DirectionsService();

      directionsDisplay = new google.maps.DirectionsRenderer(
        {
          suppressMarkers:true
        }
      );
      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      directionsDisplay.setMap($scope.map);
      //Gerar marker após o load do mapa
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){

        var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: latLng,
            icon: 'img/postos.png'
        });
        var infoWindow = new google.maps.InfoWindow({
          content: "Posto de atendimento"
        });

       google.maps.event.addListener(marker, 'click', function () {
           infoWindow.open($scope.map, marker);
       });
       var start = "-15.878483,-48.016777";

       var request = {
          origin:start,
          destination:latLng,
          travelMode: google.maps.TravelMode.DRIVING
        };
      var  markerB = new google.maps.MarkerImage('img/carro.png');
       //calc a rota
       directionsService.route(request, function(result, status) {

           if (status == google.maps.DirectionsStatus.OK) {
             directionsDisplay.setDirections(result);
              var _route = result.routes[0].legs[0];
              pinA = new google.maps.Marker({
            	position: _route.start_location,
            	map: $scope.map,
            	icon: markerB
            });
           }

         });




      });

    }, function(error){
      console.log("Could not get location");
    });


});
