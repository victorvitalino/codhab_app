var app = angular.module('codhab.services.PostosService', []);

app.service("PostosService", function ($q,$cordovaGeolocation) {
  var items = [
      { id: 0, title: 'Item 1', description: 'This is Item 1 description' },
      { id: 1, title: 'Item 2', description: 'This is Item 2 description' },
      { id: 2, title: 'Item 3', description: 'This is Item 3 description' },
      { id: 3, title: 'Item 4', description: 'This is Item 4 description' },
  ];
  this.getItems = function () {
    return $q.when(items);
  };

  this.getItem = function (id) {
      var item = null;
      for (var i = 0; i < items.length; i++) {
          if (items[i].id === id) {
              item = items[i];
              break;
          }
      }
      return $q.when(item);
  }
  return {
    getPostos:function() {
        var deferred = $q.defer();

        //temp
        var postos = [
            {
                id:1,
                nome:"Coordenação Geral",
                endereco:"Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF"
            },
            {
                id:2,
                nome:"Coordenação Geral",
                endereco:"Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF"
            }

        ];

        deferred.resolve(postos);
        return deferred.promise;
    },
    getPosto:function(id, nome, endereco) {
        var deferred = $q.defer();

        //temp
        var posto = [
            {
                id:1,
                nome:"Coordenação Geral",
                endereco:"Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF"
            },
            {
                id:2,
                nome:"Coordenação Geral",
                endereco:"Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF"
            }

        ];

        deferred.resolve(posto);
        return deferred.promise;



    }
};
});
