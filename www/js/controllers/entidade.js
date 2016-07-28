var app = angular.module('codhab.controllers.entidade',[]);
app.controller('EntidadeCtrl', function($scope, $state, $stateParams,$cordovaGeolocation, $ionicLoading, $http, EntidadesService) {

  $scope.singleEntidade = function (cnpj) {
     $http.get('http://www.codhab.df.gov.br/entidades/entidades_anteriores.json?cnpj='+ $stateParams.cnpj +'&status=&name_entity=')
       .success(function(data, status, headers,config){
         $scope.resultado = data[0];
         console.log($scope.resultado)
       })
       .error(function(data, status, headers,config){
         console.log('data error');
       })
       .then(function(resultado){
         things = resultado.data[0];
       });
   }
   /*  mapa   */
   var options = {timeout: 10000, enableHighAccuracy: true};
   $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    console.log(position.coords.latitude)
     //Seta latitude e longitude do mapa (inicio)
     var localizacao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     var destino = new google.maps.LatLng($scope.resultado.lat, $scope.resultado.long);
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
         content: "<strong>Entidade: </strong>" + $scope.resultado.fantasy_name
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
    //  alert('code: '    + error.code    + '\n' +
    //  'message: ' + error.message + '\n');
     });


});
