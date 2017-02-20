var app = angular.module('codhab.services.EntidadesService', []);
app.service("EntidadesService", function ($http,$q) {

  return {
    getEntidades:function(entidades) {
        var deferred = $q.defer();
        var entidade = [];
        $http.get('http://www.codhab.df.gov.br/entidades/entidades_anteriores.json?cnpj=&status=Credenciada&name_entity='+ entidades.entidade)
          .success(function(data, status, headers,config){
            deferred.resolve(data);
            return deferred.promise;
          })
          .error(function(data, status, headers,config){
            console.log('data error');
          })
          .then(function(result){
            things = result.data;
          });
        return deferred.promise;
    },
    getEntidade:function(cnpj) {
      var deferred = $q.defer();
      var entidade = [];
      $http.get('http://www.codhab.df.gov.br/entidades/entidades_anteriores.json?cnpj='+ cnpj +'&status=&name_entity=')
        .success(function(data, status, headers,config){
          console.log(data)
          deferred.resolve(data);
          return deferred.promise;
        })
        .error(function(data, status, headers,config){
          console.log('data error');
        })
        .then(function(result){
          things = result.data;
        });
      return deferred.promise;

    }
  };
});
