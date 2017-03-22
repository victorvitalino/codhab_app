var app = angular.module('codhab.controllers.reg', []);

app.controller('RegCtrl', function($scope, $sce) {
  $scope.items = [{
      title:'O que é Escritura?',
      text:'  Documento legal que assegura ao morador a segurança jurídica do imóvel.\
        Para que seja emitida a escritura o imóvel é necessário que o projeto urbanístico da localidade esteja aprovado pelos órgãos competentes\
        Formalizar processo de escrituração junto a CODHAB. Taxa de formalização do processo junto a CODHAB é de R$ 47,83. Pagamento de Taxas e \
        Emolumentos junto ao Cartório. Isenção do Imposto sobre transmissão Causa Mortis e Doação de Quaisquer Bens ou Direitos - ITCD (tributo que incide sobre a \
        doação ou sobre a transmissão hereditária ou testamentária de bens móveis, inclusive semoventes, títulos e créditos, e direitos a eles relativos ou bens \
        imóveis situados em território do Estado, na transmissão da propriedade plena ou da nua propriedade e na instituição onerosa de usufruto).Inicia-se com o \
        agendamento através dos telefones 156. Formalização do requerimento de regularização (realizado no dia do agendamento)'
    },{
      title:'Fases da Escrituração',
      text:'  Análise do processo: verificação da conformidade da documentação apresentada com a legislação em vigor Emissão de despacho conclusivo e assentamento do \
        interessado no cadastro de regularização, Emissão da isenção do ITCD, Emissão da Ficha descritiva para envio ao cartório, Convocação do morador a comparecer ao cartório,\
        Lavratura da escritura, Após assinatura do Presidente da CODHAB a escritura segue para registro. Prazo médio do tramite de 06 meses.'
    },{
      title:'Relação das Normas e Regulamentações',
      text:'Lei 4.996/2012, lei 3.877/2006 e lei 5.126/2013, Decreto 34.210/2013, decreto 29.072/2009 e decreto 31.714/2010.'
    },{
      title:'Certidão Positiva',
      text:'Documento que comprova endereçamento, ocupação do imóvel e sua regularidade processual. A Certidão Positiva poderá ser emitida pelo próprio interessado \
      no sítio eletrônico www.codhab.df.gov.br, na aba serviços "emitir certidão positiva". Quando não estiver disponível no sítio eletrônico o interessado poderá \
      requerer sua emissão junto a CODHAB. Para obter a certidão positiva é necessário que o imóvel seja residencial e que o processo de regularização esteja devidamente \
      autuado na CODHAB. Para requerer a emissão da certidão positiva junto a CODHAB é necessário: Agendar atendimento através dos telefones 156, Efetuar requerimento, \
      Aguardar análise do setor competente, A emissão da Certidão Positiva é gratuita.'

    }];
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

});
