var app = angular.module('codhab.controllers.faq', []);

app.controller('FaqCtrl', function($scope, $sce) {
  $scope.items = [{
      title: 'O que é o Programa Morar Bem?',
      text: 'O Programa Morar Bem, vinculado ao Programa Minha Casa, Minha Vida, do governo federal, tem transformado o sonho da casa própria em realidade.\
       A ação é voltada para famílias com renda bruta de até 12 salários mínimos. A lista de habilitados no Programa Morar Bem está disponível no portal da CODHAB \
       por ordem de pontuação. Quem está na lista deve aguardar o contato do agente financeiro e do representante da construtora conforme a classificação na fila do \
       programa para os imóveis disponíveis.'
    },{
      title: 'Quem pode participar?',
      text: 'Todo cidadão que tenha maior idade ou emancipado na forma da lei, que resida no Distrito Federal a pelo menos cinco anos, que não seja nem tenha sido \
      proprietário, promitente comprador ou cessionário de imóvel residencial no DF, que não tenha se beneficiado com outro programa habitacional no DF e que possua \
      renda bruta familiar de até doze salários mínimos.'
    },{
      title: 'Como são feitas as inscrições?',
      text: 'Para participar, o candidato precisa realizar o cadastro no portal da CODHAB. As novas datas de inscrições serão divulgadas no portal da companhia e nos \
      meios de comunicação do DF.'
    },{
      title: 'Qual o tipo de infraestrutura será entregue com a moradia?',
      text: 'Cada projeto habitacional é pensado para atender às necessidades da região que receberá o empreendimento. A infraestrutura oferecida pode contemplar\
       abastecimento de água, esgoto sanitário, energia elétrica, iluminação pública, instalações telefônicas, redes de drenagem de águas pluviais, pavimentação \
       asfáltica e, equipamentos públicos, como escolas, postos de saúde e de polícia'
    },{
      title: 'Quando e como acontecem as convocações?',
      text: 'As convocações acontecem de acordo com a disponibilidade de vagas no programa. Nessa fase, o candidato é convocado a apresentar todos os documentos para\
       comprovar as informações declaradas na inscrição. O chamamento para a convocação pode ser acompanhado pelo portal da CODHAB e pelas publicações no Diário Oficial\
        do Distrito Federal (DODF).'
    },{
      title:'Quem eu posso considerar meu dependente?',
      text:'O cônjuge (companheiro (a), inclusive em relações homoafetivas, desde que caracterizada união estável), filhos (as) ou enteados (as) de qualquer idade, \
      menores de 21 anos em que o candidato crie e eduque dos quais detenha a guarda judicial, dependentes de até 24 anos, desde que estejam cursando ensino superior e, \
      com a devida comprovação, irmãos, netos, bisnetos, desde que detenha a guarda judicial e pessoa incapaz cuidada pelo tutor ou curador.'
    },{
      title:'Quem precisa fazer o Cadastro Único?',
      text:'Os candidatos ao Programa Morar Bem que se enquadram na faixa 1, com renda mensal familiar bruta de 0 a R$ 1.600,00. Para participar, é necessário agendar o \
      atendimento no Centro de Referência de Assistência Social (CRAS) de sua região pela central 156, opção 1, digito 3. Com o agendamento, o cidadão deve criar o \
      Número de Inscrição Social (NIS) e, obrigatoriamente, apresentá-lo quando solicitado. OBS.: O NIS é dado pela Caixa Econômica Federal às pessoas que serão \
      beneficiadas por algum projeto social, mas que ainda não possuem cadastro no Programa de Integração Social (PIS).'
    },{
      title:'Como é distribuída a pontuação do Morar Bem?',
      text:'A pontuação de cada candidato é feita pela soma total de pontos alcançados de acordo com as informações declaradas na inscrição.\
      Formas de pontuação:\
      Tempo de residência no Distrito Federal - 4.000 pontos,\
      Tempo de inscrição no Cadastro da Habitação - 1.500 pontos,\
      Número de dependentes - 500 pontos cada dependente e máximo de 2.500 (cinco dependentes),\
      Grupo familiar com condições especiais - pessoas com deficiência ou pessoas com mais de 60 anos - 600 pontos para o titular e 300 pontos para o dependente.'
    },{
      title:'Fui convocado, mas perdi os prazos de entrega de documentação. O que fazer?',
      text:'Se, por alguma razão, você  não atendeu à convocação ou não apresentou a documentação necessária, é preciso se inscrever novamente no programa. Fique atento!\
       Acompanhe o portal da CODHAB e nos meios de comunicação para novas datas de inscrições.'
    },{
      title:'Entreguei toda documentação na CODHAB. Qual o próximo passo?',
      text:'Após a entrega da documentação completa e da formalização do processo, o candidato aguardará a publicação da habilitação, no Diário Oficial do Distrito Federal\
       (DODF). Em seguida, seu nome é inserido na lista de pessoas habilitadas de acordo com a faixa de renda e deverá aguardar a construção e a entrega dos empreendimentos.\
       A classificação do candidato na lista de habilitados é gerada de acordo com a pontuação alcançada pelos dados declarados, no momento da inscrição. \
       >De acordo com as unidades habitacionais disponíveis em cada faixa de renda, seguindo a ordem de classificação, os dados serão encaminhados ao empreendimento/construtora\
        para que seja iniciada a fase de financiamento.'
    },{
      title:'Entreguei toda documentação, mas meu status está como indeferido. O que isso significa?',
      text:'O processo de habilitação é indeferido quando o candidato não comprova os dados declarados ou quando deixa de cumprir algum critério do programa. O candidato \
      indeferido pode entrar com recurso para analise de dados através de requerimento junto ao Núcleo de Atendimento da CODHAB.'
    },{
      title:'Fui habilitado, entreguei toda a documentação e estou na lista do Morar Bem. E agora?',
      text:'As pessoas que estiverem na lista divulgada no portal da CODHAB devem aguardar o contato do agente financeiro e dos representantes da construtora conforme a \
      classificação na fila do Morar Bem para os imóveis disponíveis.'
    },{
      title:'Como estão distribuídos os critérios dos 20% para idosos, pessoas com deficiência e casos de vulnerabilidade?',
      text:'A companhia tem um porcentual de distribuição de moradias de 8% para pessoas com deficiência (comprovada e ratificada por órgãos especializados como as \
        Secretarias de Políticas para as Mulheres, Igualdade Racial e Direitos Humanos, de Desenvolvimento Humano e Social, de Saúde e da Segurança Pública e da Paz Social)\
        5% para idosos a partir de 60 anos; e 7% para casos de vulnerabilidade social (por exemplo, famílias removidas por obras de infraestrutura, pessoas que vivem em \
        situação de extrema miséria, moradores de rua e catadores de resíduos sólidos). Caso os percentuais estabelecidos acima não sejam atingidos por falta de candidatos \
        suficientes, a CODHAB poderá destinar as moradias aos habilitados das demais categorias previstas no Programa Morar Bem.'
    },{
      title:'Preciso aceitar o imóvel que me for ofertado?',
      text:'Não. O candidato habilitado que optar por aguardar a oferta de empreendimentos habitacionais em localidades do seu interesse, poderá ficar com a mesma pontuação \
      na fila por até quatro anos, a contar da data de sua primeira recusa. Após esse prazo, o habilitado passará à condição de declinado por prazo excedido.'
    },{
      title:'Tenho que comprovar minha deficiência declarada na inscrição?',
      text:'Sim. A deficiência deve ser comprovada por meio de laudo médico e pericia médica no ato da entrega da documentação. As pessoas que declararem algum tipo de \
      deficiência própria, ou de algum membro da família, deverão entregar os documentos no posto de atendimento da asa sul, localizado na estação do metrô da quadra 112.'
    },{
      title:'Qual a diferença entre RII e RIE?',
      text:'Relação de Inscrição Individual (RII), É o ato do cidadão se cadastrar no programa individualmente. Relação Inscrição por Entidades (RIE), É o ato se cadastrar \
       no programa por meio de uma entidade (cooperativas/associações/sindicatos). Nesses casos, a entidade é responsável pela inscrição do candidato no Programa Morar Bem. '
    },{
      title:'Quando houver nova convocação dos inscritos para habilitação no programa, quais os documentos que serão exigidos pela CODHAB?',
      text:'1.Certidão de Nascimento ou de Casamento, quando for o caso - (nos casos de convivência marital trazer as certidões de nascimento de ambos), 2. Documento \
      comprobatório de alteração do estado civil (se separado ou divorciado), 3. Certidão de Nascimento dos filhos e demais dependentes declarados, 4. Carteira de \
      Identidade (de ambos, quando for o caso), 5. CPF (de ambos, quando for o caso), 6. Comprovante de Renda e Carteira de Trabalho (de ambos, quando for o caso), \
      7. Comprovante de residência no DF, últimos 5 anos (ano a ano); Atenção: trazer comprovante para cada um dos últimos cinco anos. Não pode faltar nenhum ano.\
      8. Comprovante de tempo de domicílio no DF (chegada no DF), 9. Certidões Negativas de todos os Cartórios de Registro de Imóveis do Distrito Federal (original),\
      10.Comprovante de pagamento da taxa de abertura de processo. Atenção: As cópias dos documentos não precisam ser registrados em cartório, mas é necessário \
      apresentar o documento original.'
    },{
      title:'Por que minha posição foi alterada?',
      text:'Embora a pontuação dos candidatos do Programa Morar Bem tenha se mantido inalterada, podem ocorrer variações no posicionamento de cada candidato, para cima\
       ou para baixo, nas listas de classificação por faixa de renda. Estas variações ocorrem por diversas razões, entre elas: Atendimentos realizados pelo Núcleo de \
       Atendimento – NUATE da CODHAB, onde, diariamente, dezenas de candidatos atualizam documentos relacionados à renda familiar e com isto acabam migrando de uma Faixa \
       de Renda para outra, conforme os critérios do Programa Morar Bem. Quando um candidato migra de faixa de renda, o mesmo acaba deixando livre sua posição de classificação\
       na faixa anterior para que outro candidato com menor pontuação naquela mesma faixa ocupe. Ao mesmo tempo, este candidato tem de ocupar uma posição de classificação \
       na lista referente à nova faixa de renda, de acordo com a sua pontuação. Todos os candidatos que possuem portanto uma pontuação inferior ao do candidato que está \
       sendo migrado, dentro desta nova faixa, acabam sendo afetados em sua classificação nesta lista,Casos em que, por força de determinações judiciais, a CODHAB é obrigada\
       a incluir pessoas no cadastro,  Entre Junho de 2015 e Dezembro de 2015, houveram aproximadamente 5.000 novas habilitações de candidatos nas 4 Faixas de Renda do \
       Programa Morar Bem. Cada um destes candidatos habilitados teve que ocupar posição de classificação nas diversas listas, de acordo com sua pontuação no programa, \
       afetando com isto o posicionamento nas listas de todos os candidatos que possuam pontuação inferior. A CODHAB está se empenhando para disponibilizar mais \
       ferramentas que permitam dar clareza e transparência aos participantes do Programa Morar Bem acerca de sua situação. Continue acompanhando as atualizações em nosso \
       Portal.'
    },{
      title:'Existem taxas a serem pagas no Programa Habitacional?',
      text:'Sim. A CODHAB cobra apenas a taxa única de abertura de processo, no valor de R$ 47,83. Após ser convocado, o candidato deve comparecer ao Núcleo de Atendimento\
       (NUATE) da CODHAB, onde será emitido o boleto que deverá ser pago em uma agência do Banco de Brasília (BRB).'
    },{
      title:'Essa taxa é diferente para quem é associado à cooperativa?',
      text:'Não. A taxa da CODHAB é fixa. O valor para a abertura do processo de adesão ao programa é o mesmo para inscrições individuais quanto por entidades. A CODHAB \
      não tem responsabilidade por outros valores que possam ser cobrados de forma errônea por terceiros que não perteçam à companhia.'
    },{
      title:'Existem outras despesas?',
      text:'A emissão de certidões cartorárias têm custos, mas essas taxas são cobradas pelo próprio cartório.'
    },{
      title:'Existem pessoas autorizadas para fazer essa cobrança pela CODHAB?',
      text:'Não. A taxa da CODHAB só pode ser emitida pelo núcleo de atendimento e paga somente nas agências do BRB. Nenhuma pessoa ou empresa tem autorização para receber\
       dinheiro de pagamentos do programa ou para qualquer outro fim. Caso aconteça, pedimos à população que denuncie, pois são atos praticados fora das normas legais e \
       das regras do programa.'
    },{
      title:'Tem alguma forma de agilizar o processo de convocação?',
      text:'Não. De acordo com a lei 3.877/2006, que dispõe sobre a politica habitacional do DF, o Programa Morar Bem segue padrões rígidos quanto à classificação e pontuação\
       dos candidatos. Ninguém pode alterá-los. Informações de terceiros que prometem, mediante pagamento de taxa, conseguir o adiantamento de processos são falsas. \
       Este tipo de ato é dado como estelionato, e pode ser denunciado pelo canal de atendimento da ouvidoria (162), ou diretamente à policia civil para investigação e \
       detenção dos envolvidos.'
    },{
      title:'O beneficiário pode vender ou alugar o imóvel?',
      text:'Não. As cláusulas do contrato assinado pelos contemplados são claras. Não pode haver venda, locação, alienação, mudança de destinação ou abandono, dentro do \
      prazo de 10 anos. O não cumprimento das normas pode resultar na retomada do imóvel.'
    },{
      title:'Como denunciar um beneficiário que esteja vendendo ou alugando o imóvel?',
      text:'Para denunciar, o cidadão pode entrar em contato com a ouvidoria pela central 162, pelo endereço eletrônico www.ouvidoria.df.gov.br ou ainda, comparecer o \
      núcleo de atendimento da CODHAB. É necessário informar o endereço completo do imóvel para que possamos apurar os fatos. Ao denunciar, a identidade \
      da pessoa é preservada.'
    },{
      title:'Caso o beneficiário tenha alguma dúvida sobre o programa, quem ele deve procurar?',
      text:'Para saber mais informações sobre o programa Morar Bem, basta ligar para a central 156 da CODHAB, opção 5.'
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
