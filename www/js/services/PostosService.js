var app = angular.module('codhab.services.PostosService', []);

app.service("PostosService", function($q, $cordovaGeolocation) {
  return {
    getPostos: function() {
      var deferred = $q.defer();

      //temporario
      var postos = [{
          id: 1,
          nome: "Coordenação Geral",
          endereco: "CODHAB- Setor Comercial Sul",
          hora: "Seg à Sex. - 08:30 às 12:30 / 14:00 às 18:00",
          coordenador: "Lucélia Duda",
          tel: "993266472",
          email: "lucelia.duda@codhab.df.gov.br",
          latitude: "-15.797598",
          longitude: "-47.890676"
        }, {
          id: 2,
          nome: "Sol Nascente",
          endereco: "Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF",
          hora: "Seg. à Sex. -  9:00  às 17:00",
          coordenador: "Edson Lima",
          tel: "995574085",
          email: "edson.mello@codhab.df.gov.br",
          latitude: "-15.836044311523438",
          longitude: "-48.12946319580078"
        }, {
          id: 3,
          nome: " SOL NASCENTE Trecho 3 e QNR",
          endereco: "Sol Nascente trecho III, Chácara 81, Condominio Gênesis, Ceilândia/DF",
          hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 17:00",
          coordenador: "Fabiana Lemos",
          tel: "992264672",
          email: "fabiana.rajao@codhab.df.gov.br",
          latitude: "-15.8054504",
          longitude: "-48.1575298"
        }, {
          id: 4,
          nome: "Vila Cauhy",
          endereco: "Área especial, Prefeitural Comunitária da Vila Cauhy, Vila Cauhy, Núcleo Bandeirante/DF",
          hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 17:00",
          coordenador: "Paulo Cavalcante",
          tel: "993266472",
          email: "paulo.cavalcante@codhab.df.gov.br ",
          latitude: "-15.8749524",
          longitude: "-47.9606197"
        }, {
          id: 5,
          nome: "Estrutural",
          endereco: "Santa Luzia, Cidade Estrutural , SCIA/DF",
          hora: "Em reforma. Previsão de fim: 17/07",
          coordenador: "Isabel Alencar",
          tel: "992277458",
          email: "isabel.alencar@codhab.df.gov.br",
          latitude: "-15.7775872",
          longitude: "-47.9875296"
        }, {
          id: 6,
          nome: "Brazlândia",
          endereco: "Entre Quadra 37/47, Área Especial: Galpão da Feirinha, Vila São José – Brazlândia/DF",
          hora: "Seg. à Sex. - 9:00 às 12:00 / 13:00 às 17:00",
          coordenador: "Erick Mendonça",
          tel: "985748840",
          email: "erick.welson@codhab.df.gov.br",
          latitude: "-15.6606957",
          longitude: "-48.1980764"
        }, {
          id: 7,
          nome: "Porto Rico",
          endereco: "Av. Central s/n – Condomínio Porto Rico – Etapa I – Conj. D – Lote 7 A - Santa Maria/DF",
          hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 18:00",
          coordenador: "Mariana Bomtempo",
          tel: "995433401",
          email: "mariana.bomtempo@codhab.df.gov.br",
          latitude: "-16.035266",
          longitude: "-48.021197"
        }, {
          id: 8,
          nome: "São Sebastião",
          endereco: "Rua 01, loja 9-A, Residencial Vitória, São Sebastião/DF",
          hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 18:00",
          coordenador: "Sandra Marinho",
          tel: "993265569",
          email: "sandra.marinho@codhab.df.gov.br",
          latitude: "-15.9097939",
          longitude: "-47.7692961"
        }, {
          id: 9,
          nome: "Buritizinho",
          endereco: "QR 3, conjunto C, casa 30, Buritizinho,Sobradinho II/DF ",
          hora: " Terças e Quartas - 8h às 16h",
          coordenador: "Jéssica Costa",
          tel: "992189330",
          email: "jessica.costa@codhab.df.gov.br",
          latitude: "-15.6491212",
          longitude: "-47.8279804"
        }, {
          id: 10,
          nome: "Fercal",
          endereco: "DF 150, KM 12 – Área Especial – Engenho Velho (Conhecido como antiga quadra 18), Sobradinho II/DF",
          hora: "Segundas, Quintas e Sextas - 8h às 16h",
          coordenador: "Jéssica Costa",
          tel: "992189330",
          email: "jessica.costa@codhab.df.gov.br",
          latitude: "-15.601094",
          longitude: "-47.8702421"
        }, {
          id: 11,
          nome: "Por do Sol",
          endereco: "SHPS, Qd 303 Conjunto A Loja 29 -B,Ceilândia/DF",
          hora: "Seg. à Sex. - 9:00 às 13:00 / 14:00 às 19:00",
          coordenador: "Frederico Barboza",
          tel: "995449774",
          email: "frederico.barboza@codhab.df.gov.br",
          latitude: "-15.85698",
          longitude: "-48.11779"
        }

      ];

      deferred.resolve(postos);
      return deferred.promise;
    },
    getPosto: function(id, nome, endereco, hora, coordenador, tel, email, latitude, longitude) {
      var deferred = $q.defer();

      //temporario
      var posto = {
        id: id,
        nome: nome,
        endereco: endereco,
        hora: hora,
        coordenador: coordenador,
        tel: tel,
        email: email,
        latitude: latitude,
        longitude: longitude
      };

      deferred.resolve(posto);
      return deferred.promise;

    }
  };
});
