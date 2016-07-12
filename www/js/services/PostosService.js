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
                hora: "Seg à Sex. - 08:30 às 12:30 / 14:00 às 18:00",
                coordenador: "Lucélia Duda",
                tel: "993266472",
                email: "lucelia.duda@codhab.df.gov.br"
            },
            {
                id:2,
                nome:"Sol Nascente",
                endereco:"Prologongamento da Av. P4, Sol Nascente - Trecho I, Ceilândia/DF",
                hora: "Seg. à Sex. -  9:00  às 17:00",
                coordenador: "Isabela Gardês",
                tel: "995574085",
                email: "isabela.gardes@codhab.df.gov.br"
            },
            {
                id:3,
                nome:"QNR",
                endereco:"SHPS, Qd 303 Conjunto A Loja 28 -B,Ceilândia/DF",
                hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 17:00",
                coordenador: "Fabiana Lemos",
                tel: "992264672",
                email: "fabiana.rajao@codhab.df.gov.br"
            },
            {
                id:4,
                nome:"Vila Cauhy",
                endereco:"Área especial, Prefeitural Comunitária da Vila Cauhy, Vila Cauhy, Núcleo Bandeirante/DF",
                hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 17:00",
                coordenador: "Paulo Cavalcante",
                tel: "993266472",
                email: "frederico.barboza@codhab.df.gov.br"
            },
            {
                id:5,
                nome:"Estrutural",
                endereco:"Santa Luzia, Cidade Estrutural , SCIA/DF",
                hora: "Em reforma. Previsão de fim: 17/07",
                coordenador: "Isabel Alencar",
                tel: "992277458",
                email: "isabel.alencar@codhab.df.gov.br"
            },
            {
                id:6,
                nome:"Brazlândia",
                endereco:"Quadra 47, Área Especial, Vila São José – Brazlândia/DF",
                hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 17:00",
                coordenador: "Erick Mendonça",
                tel: "982792994",
                email: "erick.welson@codhab.df.gov.br"
            },
            {
                id:7,
                nome:"Porto Rico",
                endereco:"Av. Central s/n – Condomínio Porto Rico – Etapa I – Conj. D – Lote 7 A - Santa Maria/DF",
                hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 18:00",
                coordenador: "Mariana Bontempo",
                tel: "995433401",
                email: "mariana.bontempo@codhab.df.gov.br"
            },
            {
                id:8,
                nome:"São Sebastião",
                endereco:"Rua 01, loja 9-A, Residencial Vitória, São Sebastião/DF",
                hora: "Seg. à Sex. - 8:00 às 12:00 / 13:00 às 18:00",
                coordenador: "Sandra Marinho",
                tel: "993265569",
                email: "sandra.marinho@codhab.df.gov.br"
            },
            {
                id:9,
                nome:"Buritizinho",
                endereco:"QR 3, conjunto C, casa 30, Buritizinho,Sobradinho II/DF ",
                hora: " Terças e Quartas - 8h às 16h",
                coordenador: "Jéssica Costa",
                tel: "992189330",
                email: "jessica.costa@codhab.df.gov.br"
            },
            {
                id:10,
                nome:"Fercal",
                endereco:"DF 150, KM 12 – Área Especial – Engenho Velho (Conhecido como antiga quadra 18), Sobradinho II/DF",
                hora: "Segundas, Quintas e Sextas - 8h às 16h",
                coordenador: "Jéssica Costa",
                tel: "992189330",
                email: "jessica.costa@codhab.df.gov.br"
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
