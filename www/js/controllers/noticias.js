var app = angular.module('codhab.controllers.noticias', []);

/*********************************************************************
 * NoticiasCtrl
  Controller para carregar todas as noticias da codhab
 *********************************************************************/
app.controller('NoticiasCtrl', function ($scope,$stateParams,$http, $sce, $state, $ionicLoading) {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.codhab.df.gov.br/noticias.json')
        .success(function(data, status, headers,config){
          console.log(data);
          $scope.results = data[0].posts;
          $scope.results_sliders = data[0].sliders;
           $ionicLoading.hide();
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
});
/*********************************************************************
 * NoticiaCtrl
  Controller para carregar uma noticia especifica da codhab.
 *********************************************************************/
app.controller('NoticiaCtrl', function ($scope,$stateParams,$http, $sce, $ionicLoading) {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.codhab.df.gov.br/postagem/'+ $stateParams.id + ".json")
  .success(function(data, status, headers, config){
    console.log(data);
    $scope.noticia = data;
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
});
