// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('codhab', ['ionic',
'ngCordova',
'ngMessages',
'ngCpfCnpj',
'ui.mask',
'angularMoment',
'codhab.controllers.app',
'codhab.controllers.map',
'codhab.controllers.search',
'codhab.controllers.searchreg',
'codhab.controllers.message',
'codhab.controllers.login',
'codhab.controllers.report',
'codhab.controllers.postos',
'codhab.controllers.assistencia',
'codhab.controllers.slider',
'codhab.controllers.entidades',
'codhab.controllers.entidade',
'codhab.controllers.noticias',
'codhab.controllers.portal',
'codhab.controllers.scan',
'codhab.controllers.cadastro',
'codhab.controllers.area',
'codhab.controllers.tabs',
'codhab.controllers.faq',
'codhab.services.auth',
'codhab.services.ReportService',
'codhab.services.PostosService',
'codhab.services.MessageService',
'codhab.services.EntidadesService'

])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
    }

    /*OneSignal*/

    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    // Alert to debug
    var notificationOpenedCallback = function(jsonData) {
      // alert("Notification opened:\n" + JSON.stringify(jsonData));
      // console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    // TODO: Update with your OneSignal AppId before running.
    window.plugins.OneSignal
      .startInit("f8691fb0-e0c9-4d6a-b927-c795b65727c5")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
      /*END OneSignal*/

      window.plugins.OneSignal.getIds(function(ids) {
        window.localStorage['UserId'] = ids.userId;
        console.log("UserId: " + ids.userId);
        window.localStorage['PushToken'] = ids.pushToken;
        console.log("oi"+ window.localStorage['PushToken']);
        console.log("oi"+ window.localStorage['UserId']);
        console.log('getIds: ' + JSON.stringify(ids));
    });
  });
});

app.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
$ionicConfigProvider.tabs.position('bottom');
$ionicConfigProvider.navBar.alignTitle('center');
$ionicConfigProvider.backButton.text('');
	$stateProvider
    .state('signup',{
      url: "/signup",
      templateUrl:"views/login/signup.html",
      controller: 'SignupCtrl'
    })

		.state('tabs', {
			url: "/app",
      abstract: true,
			templateUrl: "views/app/tabs.html",
      controller: 'TabsCtrl'
		})
    .state('tabs.login',{
      url: "/login",
      views:{
      'tabs-login':{
        templateUrl:"views/login/login.html",
        controller: 'LoginCtrl'
        }
      }
    })
    .state('tabs.senha',{
      url: "/cadastro",
      views:{
        'tabs-login':{
          templateUrl: "views/app/cadastro/index.html",
          controller: 'CadastroCtrl'
        }
      }
    })
    .state('tabs.area_restrita',{
      url: "/area_restrita",
      views:{
      'tabs-cadastro':{
        templateUrl:"views/app/arearestrita/index.html",
        controller: 'AreaCtrl'
        }
      }
    })
    .state('tabs.home', {
      url: "/home",
      views:{
        'tabs-home':{
          templateUrl: "views/app/home.html",
          controller: 'AppCtrl'
        }
      }
    })
    .state('tabs.info', {
      url: "/info",
      views:{
        'tabs-info':{
          templateUrl: "views/app/info.html",
          controller: 'AppCtrl'
        }
      }
    })
    .state('tabs.messages',{
      url: "/messages",
      views:{
        'tabs-home':{
          templateUrl: "views/app/message/messages.html",
          controller: 'MessageListCtrl'
        }
      }
    })
    .state('tabs.habitacao',{
      url: "/habitacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/habitacao/index.html"
        }
      }
    })
    .state('tabs.oquehabitacao',{
      url: "/oque_habitacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/habitacao/oque_habitacao.html"
        }
      }
    })
    .state('tabs.agendamentohabitacao',{
      url: "/agendamento",
      views:{
        'tabs-home':{
          templateUrl: "views/app/habitacao/agendamento.html"
        }
      }
    })
    .state('tabs.listahabitacao',{
      url: "/listahabitacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/habitacao/listahabitacao.html",
          controller: 'SearchCtrl'
        }
      }
    })
    .state('tabs.regularizacao',{
      url: "/regularizacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/regularizacao/index.html"
        }
      }
    })
    .state('tabs.oqueregularizacao',{
      url: "/oque_regularizacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/regularizacao/oque_regularizacao.html"
        }
      }
    })
    .state('tabs.listaregularizacao',{
      url: "/listaregularizacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/regularizacao/listaregularizacao.html",
          controller: 'SearchRegCtrl'
        }
      }
    })
    .state('tabs.agendamentoregularizacao',{
      url: "/agendamentoregularizacao",
      views:{
        'tabs-home':{
          templateUrl: "views/app/regularizacao/agendamento.html"
        }
      }
    })
    .state('tabs.agendamentogeral',{
      url: "/agendamentogeral",
      views:{
        'tabs-home':{
          templateUrl: "views/app/agendamentogeral.html"
        }
      }
    })
    .state('tabs.agendamentocarteira',{
      url: "/agendamentocarteira",
      views:{
        'tabs-home':{
          templateUrl: "views/app/agendamentocarteira.html"
        }
      }
    })
    .state('tabs.terms',{
          url: "/terms",
          views:{
            'tabs-info':{
              templateUrl: "views/app/terms.html"
            }
          }
        })
    .state('tabs.faq',{
          url: "/faq",
          views:{
            'tabs-info':{
              templateUrl: "views/app/faq.html",
              controller: 'FaqCtrl'
            }
          }
        })
        .state('intro',{
          url: "/intro",
          templateUrl:"views/app/intro.html",
          controller: 'sliderCtrl'
        })
    .state('tabs.new_message',{
      url: "/new_message",
      views:{
        'tabs-home':{
          templateUrl: "views/app/message/new_message.html",
          controller: 'messageCtrl'
        }
      }
    })
    .state('tabs.map',{
      url: "/map",
      views:{
        'tabs-home':{
          templateUrl: "views/app/map/map.html",
          controller: 'MapCtrl'
        }
      }
    })
    .state('tabs.assistencia',{
      url: "/assistencia",
      views:{
        'tabs-home':{
        templateUrl: "views/app/assistencia/index.html",
        controller: 'AssistenciaCtrl'
        }
      }
    })
    .state('tabs.entidades',{
      url: "/entidades",
      views:{
        'tabs-home':{
        templateUrl: "views/app/entidade/index.html"
        }
      }
    })
    .state('tabs.listaentidades',{
      url: "/listaentidades",
      views:{
        'tabs-home':{
        templateUrl: "views/app/entidade/listaentidade.html",
        controller: 'EntidadesCtrl'
        }
      }
    })
    .state('tabs.noticias',{
      url: "/noticias",
      views:{
        'tabs-noticias':{
        templateUrl: "views/app/noticias/index.html",
        controller: 'NoticiasCtrl'
        }
      }
    })
    .state('tabs.noticia',{
      url: "/noticia/:id",
      views:{
        'tabs-noticias':{
        templateUrl: "views/app/noticias/single.html",
        controller: 'NoticiaCtrl'
        }
      }
    })

    .state('tabs.portal',{
      url: "/portal",
      views:{
        'tabs-home':{
        templateUrl: "views/app/portal/index.html",
        controller: 'portalCtrl'
        }
      }
    })
    .state('tabs.portal_codhab',{
      url: "/portal_codhab",
      views:{
        'tabs-home':{
        templateUrl: "views/app/portal/codhab.html",
        controller: 'portalCtrl'
        }
      }
    })
    .state('tabs.portal_acoes',{
      url: "/portal_acoes",
      views:{
        'tabs-home':{
        templateUrl: "views/app/portal/acoesurbanas.html",
        controller: 'portalCtrl'
        }
      }
    })
    .state('tabs.portal_habita',{
      url: "/portal_habita",
      views:{
        'tabs-home':{
        templateUrl: "views/app/portal/habitabrasilia.html",
        controller: 'portalCtrl'
        }
      }
    })
    .state('tabs.portal_mobi',{
      url: "/portal_mobi",
      views:{
        'tabs-home':{
        templateUrl: "views/app/portal/mobi.html",
        controller: 'portalCtrl'
        }
      }
    })
    .state('tabs.oqueentidades',{
      url: "/oqueentidades",
      views:{
        'tabs-home':{
        templateUrl: "views/app/entidade/oque_entidade.html"
        }
      }
    })
    .state('tabs.agendamentoentidades',{
      url: "/entidades",
      views:{
        'tabs-home':{
        templateUrl: "views/app/entidade/agendamento.html"
        }
      }
    })
    .state('tabs.entidade',{
      url:"/entidade/:cnpj?lat&long",
      views:{
        'tabs-home':{
          templateUrl:"views/app/entidade/single.html",
          controller:'EntidadeCtrl'
        }
      }
    })
    .state('tabs.postos',{
      url:"/postos/:id?nome&endereco&hora&coordenador&tel&email&latitude&longitude",
      views:{
        'tabs-home':{
          templateUrl:"views/app/assistencia/single.html",
          controller:'PostosCtrl'
        }
      }
    })
    .state('tabs.report',{
      url: "/report",
      views:{
        'tabs-home':{
          templateUrl: "views/app/report/report.html",
          controller: 'reportCreateCtrl'
        }
      }
    })
    .state('tabs.scan',{
      url: "/scan",
      views:{
        'tabs-scan':{
          templateUrl: "views/app/scan/index.html",
          controller: 'ScanCtrl'
        }
      }
    })



   // $ionicConfigProvider.tabs.position('bottom')
	// if none of the above states are matched, use this as the fallback

	   $urlRouterProvider.otherwise('/app/home');

    if(localStorage.getItem("LocalData") == null)
      {
          var data = [];
          data = JSON.stringify(data);
          localStorage.setItem("LocalData", data);
      }
});
