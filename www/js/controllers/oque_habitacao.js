var app = angular.module('codhab.controllers.hab', []);

app.controller('HabCtrl', function($scope, $sce) {
  $scope.items = [{
      title: 'O que é?',
      text: 'O Programa Morar Bem, vinculado ao Programa Minha Casa, Minha Vida, do governo federal, tem transformado o sonho da casa própria em \
      realidade. A ação é voltada para famílias com renda bruta de até 12 salários mínimos. Criado em 2011, o programa popular visa a construção de \
      unidades habitacionais no Distrito Federal. A proposta é ofertar moradias com infraestrutura urbana, como abastecimento de água, esgoto sanitário, \
      energia elétrica, iluminação pública, instalações telefônicas, redes de drenagem de águas pluviais, pavimentação asfáltica e, equipamentos públicos, \
      como escolas, postos de saúde e de polícia.'
    },{
      title:'Quem pode participar?',
      text:'Pode participar do programa, o cidadão que atender aos seguintes requisitos:\
      Ter maioridade ou ser emancipado na forma da lei,\
      Residir no Distrito Federal nos últimos cinco anos,\
      Não ser, nem ter sido proprietário, promitente comprador ou cessionário de imóvel no DF,\
      Não ser beneficiado em outro programa habitacional no Distrito Federal,\
      Possuir renda familiar de até doze salários mínimos.\
      As condições para participar do Programa Morar Bem estão previstas na Lei 3.877/2006 que dispõe sobre a Política Habitacional do Distrito Federal.'
    },{
      title:'Quais as Diferenças entre RII e RIE?',
      text:'Relação de Inscrição Individual (RII): É o ato do cidadão se cadastrar no programa individualmente.\
      Relação Inscrição por Entidades (RIE): É o ato se cadastrar no programa por meio de uma entidade (cooperativas/associações/sindicatos). Nesses casos, \
      a entidade é responsável pela inscrição do candidato no Programa Morar Bem.'
    },{
      title:'O que são convocados não habilitados?',
      text:'O Programa Morar Bem trata como convocado não habilitado a pessoa que não atendeu aos chamados para apresentar documentação em 2012, 2013 e 2014. \
      Os convocados dia 4 de julho de 2014 no Diário Oficial do Distrito Federal serão reconvocados pela Codhab por agendamento.'
    },{
      title:'Lista de idosos, pessoas com deficiência e casos de vulnerabilidade',
      text:'De acordo com a lei 3.877, de 26 de junho de 2006</a>, de cada área destinada à habitação de interesse social, 40% das moradias são destinadas às \
      pessoas do cadastro geral de inscritos individuais, 40% para pessoas cadastradas junto a cooperativas e associações habitacionais. Outros 20% são reservados \
      aos demais programas habitacionais de interesse social, que passam a contar com a seguinte distribuição:\
      8 % para pessoas com deficiência, ratificada por órgãos especializados (Secretaria de Estado de Políticas para Mulheres, Igualdade Racial e Direitos Humanos \
      (SEMIDH), Secretaria de Estado de Desenvolvimento Humano e Social (SEDHS), Secretaria de Saúde (SES) e Secretaria de Segurança Pública (SSP),\
      5 % para atendimento aos idosos&nbsp;(a partir de 60 anos),\
      7% para casos de vulnerabilidade social, a exemplo de famílias removidas em caso de obras de infraestrutura, pessoas que vivem em situação \
      de extrema miséria, moradores de rua e catadores de resíduos sólidos, além de casos críticos por conta de prejuízos ou riscos ao Estado. Os casos serão comprovados\
      por meio de relatórios oficiais elaborados pelos órgãos competentes.\
      Caso os percentuais estabelecidos acima não sejam atingidos por falta de candidatos suficientes, a CODHAB poderá destinar as moradias aos habilitados das demais \
      categorias previstas no Programa Morar Bem.\
      Os candidatos integrantes das listas de idosos, pessoas com deficiência e casos de vulnerabilidade poderão sofrer variações de posicionamento nestas listas à medida \
      em que outros candidatos completarem 60 anos de idade, novos casos de deficiência sejam comprovados ou de acordo com novas habilitações e entregas de empreendimentos \
      futuros. Até que a migração seja concluída, os candidatos poderão estar nas listas de idosos ou de deficientes e, ao mesmo tempo, permanecerem na Relação de Inscritos \
      Individuais (RII) ou na Relação de Inscritos por Entidades (RIE).'
    },{
      title:'Perícia Médica',
      text:'A CODHAB informa que as pessoas com deficiência passarão por um exame clínico especializado. A análise será realizada antes da contemplação da unidade habitacional \
      para que haja a validação da deficiência, de acordo com o Estatuto da Pessoa com Deficiência, publicado pela Presidência da República em 6 de julho de 2015. \
      Pelo documento, são consideradas pessoas com deficiência, aquelas que têm impedimento de longo prazo, de natureza física, mental, intelectual ou sensorial, o qual, em \
      interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.\
      Dentro dos 20% de moradias destinadas aos demais programas habitacionais de interesse social, a contemplação poderá variar entre deficientes, idosos e casos de \
      vulnerabilidade social. Isso ocorrerá quando houver a inexistência de participantes hierarquizados em uma das listas'
    },{
      title:'Faixas de renda',
      text:'Faixa I – renda mensal de 0 a R$ 1.600,00, Faixa II – renda mensal de R$ 1.600,01 a R$ 3.275,00, Faixa III – renda mensal de R$ 3.275,01 a R$ 5.000,00, Faixa IV – \
      acima de R$ 5.001,01 até 12 salários mínimos.'
    },{
      title:'Observação:Cadúnico – Faixa I',
      text:'Os candidatos ao Programa Morar Bem que se enquadram na faixa 1, com renda mensal familiar bruta de 0 a R$ 1.600,00 devem agendar o atendimento no Centro de Referência \
      de Assistência Social (CRAS) de sua região pela central 156, opção 1, dígito 3. Com o agendamento, o cidadão deve criar o Número de Inscrição Social (NIS) e, \
      obrigatoriamente, apresentá-lo quando solicitado. O Número de Inscrição de Cadastro é dado pela Caixa Econômica Federal às pessoas que serão beneficiadas por algum \
      projeto social e ainda não possuem cadastro no Programa de Integração Social (PIS).'
    },{
      title:'Fases do programa',
      text:'Inscrição:o interessado deve preencher o formulário na internet com os dados pessoais para concorrer à moradia, Convocação:o candidato deve apresentar a documentação \
      para comprovar as informações declaradas na inscrição, Habilitação:os dados declarados são confirmados e publicados em Diário Oficial, Titularidade:entrega da unidade \
      habitacional e recebimento de escritura pública.'
    },{
      title:'Critérios de classificação/pontuação',
      text:'Tempo de residência no Distrito Federal - 4.000 pontos, Tempo de inscrição no Cadastro da Habitação - 1.500 pontos, Número de dependentes - 500 pontos cada dependente \
      e máximo de 2.500 (cinco dependentes ou mais), Grupo familiar com condições especiais - pessoas com deficiência ou pessoas com mais de 60 anos - 600 pontos para o titular \
      e 300 pontos para o dependente.'
    },{
      title:'Quem pode ser dependente?',
      text:'Cônjuge, Companheiro (a), inclusive em relações homoafetivas, desde que caracterizada união estável, Filhos(as) ou enteados(as) de qualquer idade, Menores de 21 anos \
      em que o candidato crie e eduque, dos quais detenha a guarda judicial, Dependentes de até 24 anos, desde que estejam cursando ensino superior e com a devida comprovação,\
      Irmãos, netos, bisnetos, desde que detenha a guarda judicial, Pessoa incapaz cuidada pelo tutor ou curador.'
    },{
      title:'Como se inscrever?',
      text:'Para participar, o candidato precisa realizar o cadastro no portal da CODHAB. As novas datas de inscrições serão divulgadas no portal da Companhia e nos meios de \
      comunicação do DF. *Preencha o formulário de inscrição apenas com informações verdadeiras&nbsp;e que possam ser comprovadas por meio de documentos&nbsp;como certidões, \
      comprovantes de endereço&nbsp;e tempo de residência.'
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
