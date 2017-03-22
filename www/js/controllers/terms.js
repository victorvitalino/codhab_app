var app = angular.module('codhab.controllers.terms', []);

app.controller('TermsCtrl', function($scope, $sce) {
  $scope.items = [{
      title:'Como usar nossos Serviços',
      text:'É preciso que você siga as políticas disponibilizadas a você dentro dos Serviços.\
        Não faça uso indevido de nossos Serviços. Por exemplo, não interfira com nossos Serviços nem tente acessá-los por um\
        método diferente da interface e das instruções que fornecemos. Você pode usar nossos serviços somente conforme permitido\
        por lei, inclusive leis. Podemos suspender ou deixar de fornecer nossos Serviços se você descumprir nossos termos ou\
        políticas ou se estivermos investigando casos de suspeita de má conduta.\
        O uso de nossos Serviços não lhe confere a propriedade sobre direitos de propriedade intelectual sobre os nossos Serviços\
        ou sobre o conteúdo que você acessar. Você não pode usar conteúdos de nossos Serviços a menos que obtenha permissão\
        do proprietário de tais conteúdos ou que o faça por algum meio permitido por lei. Estes termos não conferem a você\
        o direito de usar quaisquer marcas ou logotipos utilizados em nossos Serviços. Não remova, oculte ou altere quaisquer\
        avisos legais exibidos em ou junto a nossos Serviços. Nossos Serviços exibem alguns conteúdos que não são da CODHAB. \
        Esses conteúdos são de exclusiva responsabilidade da entidade que os disponibiliza. Podemos revisar conteúdo para determinar\
        se é ilegal ou se infringe nossas políticas, e podemos remover ou nos recusar a exibir conteúdos que razoavelmente acreditamos \
        violar nossas políticas ou a lei. Mas isso não significa, necessariamente, que revisaremos conteúdos, portanto por favor, não presuma \
        que o faremos. Alguns dos nossos Serviços estão disponíveis em dispositivos móveis. O usuário não deve utilizar tais Serviços de forma\
        que o distraia ou o impeça de cumprir leis de trânsito ou de segurança.'
    },{
      title:'Sobre Software em nossos Serviços',
      text:'Quando um Serviço exige ou inclui software disponível para download, tal software poderá atualizar-se automaticamente\
        em seu dispositivo se uma nova versão ou recurso estiver disponível. Alguns Serviços podem permitir que você ajuste\
        suas configurações de atualizações automáticas. a CODHAB concede a você uma licença pessoal, mundial, não exclusiva, intransferível\
        e isenta de royalties para o uso do software fornecido pela CODHAB como parte dos Serviços. Essa licença tem como único objetivo permitir\
        que você use e aproveite o benefício dos Serviços, tal como fornecidos pela CODHAB, da forma permitida por estes termos. Você não\
        poderá copiar, modificar, distribuir, vender ou alugar qualquer parte de nossos Serviços ou o software incluso, nem\
        poderá fazer engenharia reversa ou tentar extrair o código fonte desse software, exceto nos casos em que a legislação\
        proibir tais restrições, ou quando você tiver nossa permissão por escrito. Software de código aberto é importante para nós.\
        Alguns dos softwares usados em nossos Serviços podem ser oferecidos sob uma licença de código aberto que colocaremos a sua disposição. \
        Pode haver disposições na licença de código aberto que substituam expressamente alguns desses termos.'
    },{
      title:'Sobre Geolocalização',
      text:'>Alguns de nossos Serviços utilizam a geolocalização para localizar o usuário e atualizar nossos banco de dados, essas localizações\
       serão de uso interno da CODHAB, para atualização cadastral dos usuarios.'
    },{
      title:'Sobre estes Termos',
      text:'Podemos modificar estes termos ou quaisquer termos adicionais que sejam aplicáveis a um Serviço para, por exemplo, refletir\
        alterações da lei ou mudanças em nossos Serviços. Você deve consultar os termos regularmente. Postaremos avisos sobre\
        modificações nesses termos nesta página. Publicaremos um aviso de alteração sobre os termos adicionais dentro do Serviço\
        aplicável. As alterações não serão aplicadas retroativamente e entrarão em vigor pelo menos quatorze dias após sua\
        publicação. Entretanto, alterações a respeito de novas funcionalidades de um Serviço ou alterações feitas por razões\
        legais entrarão em vigor imediatamente. Se você não concordar com os termos alterados de um Serviço, deve descontinuar\
        o uso desse Serviço.\
        Em caso de conflito entre estes termos e os termos adicionais, os termos adicionais prevalecerão com relação a esse conflito.\
        Estes termos regem a relação entre a CODHAB e você. Eles não criam quaisquer direitos para terceiros.\
        Caso você não cumpra estes termos e nós não tomemos providências imediatas, isso não significa que estamos renunciando\
        a quaisquer direitos que possamos ter (como tomar providências futuras).\
        Caso uma condição específica destes termos não seja executável, isso não prejudicará quaisquer outros termos.\
        Para obter informações sobre como entrar em contato com a CODHAB, por favor visite nossa Ouvidoria na página http://www.ouvidoria.df.gov.br'

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
