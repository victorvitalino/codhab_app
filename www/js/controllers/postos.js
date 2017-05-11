var app = angular.module('codhab.controllers.postos',[]);
app.controller('PostosCtrl', function($scope, $stateParams, $cordovaGeolocation, $ionicLoading, $http) {
  $scope.navegar = function(lat, lon){
    launchnavigator.navigate([lat, lon])
  }
  $scope.navegars = function ( destinos ) {
     v = destinos;
    console.log(v)
  }

  $http.get('http://www.codhab.df.gov.br/assistencia/'+ $stateParams.id + ".json")
  .success(function(data, status, headers, config){
    console.log(data);
    $scope.posto = data;
  })
  .error(function(data, status, headers,config){
    console.log('data error');
     $scope.verify = true;
      $ionicLoading.hide();
  })
  .then(function(results){
    things = results.data;
     $ionicLoading.hide();
  });


  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    //Seta latitude e longitude do mapa (inicio)
    var localizacao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var destino = new google.maps.LatLng($scope.posto.latitude, $scope.posto.longitude);
    //opções do mapa
    var mapOptions = {
      center: localizacao,
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
      var icon_posto = {
        url: "img/postos.png",
        scaledSize: new google.maps.Size(50,55)
      }
      var icon_carro = {
        url: "img/carro.png",
        scaledSize: new google.maps.Size(50,55)
      }
      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: destino,
          icon: icon_posto,

      });
      var infoWindow = new google.maps.InfoWindow({
        content: "<strong>Posto de atendimento: </strong>" + $scope.posto.name
      });

     google.maps.event.addListener(marker, 'click', function () {
         infoWindow.open($scope.map, marker);
     });
     var start = localizacao;

     var request = {
        origin:start,
        destination:destino,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
     //calc a rota
     directionsService.route(request, function(result, status) {

         if (status == google.maps.DirectionsStatus.OK) {
           directionsDisplay.setDirections(result);

            var _route = result.routes[0].legs[0];
            pinA = new google.maps.Marker({
            position: _route.start_location,
            map: $scope.map,
            icon: icon_carro
          });
         }

       });




    });

  },
  function onError(error) {
     alert("Erro: Para visualizar a localização, ligue seu GPS.");
    // alert('code: '    + error.code    + '\n' +
    // 'message: ' + error.message + '\n');
    });

});
