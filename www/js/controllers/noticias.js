var app = angular.module('codhab.controllers.noticias', []);

/*********************************************************************
 * NoticiasCtrl
 *********************************************************************/
app.controller('NoticiasCtrl', function ($scope,$stateParams,$http, $sce, $parse,$ionicSlideBoxDelegate, $state) {
  $ionicSlideBoxDelegate.update()
  $http.get('http://www.codhab.df.gov.br/noticias.json')
        .success(function(data, status, headers,config){
          console.log(data);
          $scope.results = data[0].posts;
          $scope.results_sliders = data[0].sliders;

        })
        .error(function(data, status, headers,config){
          console.log('data error');
           $scope.verify = true;
        })
        .then(function(results){
          things = results.data;
        });
});
/*********************************************************************
 * NoticiaCtrl
 *********************************************************************/
app.controller('NoticiaCtrl', function ($scope,$stateParams,$http, $sce, $parse) {
  $http.get('http://www.codhab.df.gov.br/postagem/'+ $stateParams.id + ".json")
  .success(function(data, status, headers, config){
    console.log(data);
    $scope.noticia = data;
  })
  .error(function(data, status, headers,config){
    console.log('data error');
     $scope.verify = true;
  })
  .then(function(results){
    things = results.data;
  });
});
