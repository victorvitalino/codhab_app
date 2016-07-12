var app = angular.module('codhab.services.PostosService', []);

app.service("PostosService", function ($q,$cordovaGeolocation) {
  return {
    getPostos:function() {
        var deferred = $q.defer();

        //temporario
        var postos = [
            {
                id:1,
                nome:"Coordenação Geral",
                endereco:"CODHAB- Setor Comercial Sul",
                tel: "6182073787",
                email: "vitalino.victor@gmail.com"
            },
            {
                id:2,
                nome:"Sol Nascente",
                endereco:"Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF"
            }

        ];

        deferred.resolve(postos);
        return deferred.promise;
    },
    getPosto:function(id, nome, endereco) {
        var deferred = $q.defer();

        //temporario
        var posto = {
            id:id,
            nome:nome,
            endereco:endereco
        };

        deferred.resolve(posto);
        return deferred.promise;

    }
};
});
