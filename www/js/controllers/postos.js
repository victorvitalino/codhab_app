var app = angular.module('codhab.controllers.postos',[]);
app.controller('PostosCtrl', function($scope, $stateParams, $cordovaGeolocation, $ionicLoading, $http, PostosService) {
  $scope.navegars = function ( destinos ) {
     v = destinos;
    console.log(v)
    // var email = "mailto:"+ end;
    // document.location.href = email;
  }
  $scope.posto = {};
  var coordenada = $stateParams.coordenada;
  PostosService.getPosto(
     $stateParams.id,
     $stateParams.nome,
     $stateParams.endereco,
     $stateParams.hora,
     $stateParams.coordenador,
     $stateParams.tel,
     $stateParams.email,
     $stateParams.latitude,
     $stateParams.longitude
   ).then(function(res){
      $scope.posto = res;
      console.log($scope.posto)
  });


  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    //Seta latitude e longitude do mapa (inicio)
    var localizacao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var destino = new google.maps.LatLng($stateParams.latitude, $stateParams.longitude);
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
        content: "<strong>Posto de atendimento: </strong>" + $stateParams.nome
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

});
