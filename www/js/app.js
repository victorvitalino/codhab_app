// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

function onPushwooshInitialized(pushNotification) {

  //if you need push token at a later time you can always get it from Pushwoosh plugin
  pushNotification.getPushToken(
    function(token) {

    //alert("o token é:" + token)

      console.info('push token: ' + token);
    }
  );
//crRNSCHBa0Q:APA91bEUo_WiPB-nNXJmElEcH-LujAQihY-ZWrxML8aC6SQew1WnvuSU0qo-suuVgv5N38RySPdm_KQ_trg7O2y0NzCobJebOotgnkOc4YfZVZ6S-3osMaCNOQUUf1TDGM2vGMasNbTu
  //and HWID if you want to communicate with Pushwoosh API
  pushNotification.getPushwooshHWID(
    function(token) {
      console.info('Pushwoosh HWID: ' + token);
    }
  );
  //crRNSCHBa0Q:APA91bEUo_WiPB-nNXJmElEcH-LujAQihY-ZWrxML8aC6SQew1WnvuSU0qo-suuVgv5N38RySPdm_KQ_trg7O2y0NzCobJebOotgnkOc4YfZVZ6S-3osMaCNOQUUf1TDGM2vGMasNbTu
  //settings tags
  pushNotification.setTags({
      tagName: "tagValue",
      intTagName: 10
    },
    function(status) {
      console.info('setTags success: ' + JSON.stringify(status));
    },
    function(status) {
      console.warn('setTags failed');
    }
  );

  pushNotification.getTags(
    function(status) {
      //alert('getTags success: ' + JSON.stringify(status));
      console.info('getTags success: ' + JSON.stringify(status));
    },
    function(status) {
      console.warn('getTags failed');
    }
  );

  //start geo tracking.
  //pushNotification.startLocationTracking();
}

function initPushwoosh() {
  var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");

  //set push notifications handler
  document.addEventListener('push-notification',
    function(event) {
      var message = event.notification.message;
      var userData = event.notification.userdata;

    //  alert("Push message opened: " + message);
      console.info(JSON.stringify(event.notification));

      //dump custom data to the console if it exists
      if (typeof(userData) != "undefined") {
        console.warn('user data: ' + JSON.stringify(userData));
      }
    }
  );

  //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
  pushNotification.onDeviceReady({
    projectid: "190801927723",
    appid: "48A40-8A976",
    serviceName: ""
  });

  //register for push notifications
  pushNotification.registerDevice(
    function(status) {
    //  alert("registered with token: " + status.pushToken);
      onPushwooshInitialized(pushNotification);
    },
    function(status) {
    //  alert("failed to register: " + status);
      console.warn(JSON.stringify(['failed to register ', status]));
    }
  );
}

var app = angular.module('codhab', ['ionic',
'ngCordova',
'ngMessages',
'ngCpfCnpj',
'ui.mask',
'ksSwiper',
'angularMoment',
// 'parse-angular', Removido Temporariamente
// 'parse-angular.enhance', Removido Temporariamente
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
    initPushwoosh();
    //StatusBar.overlaysWebView(false);
    // Parse - Removido Temporariamente
    // Parse.initialize("0nHHDsgXpUZieEkv46JhEKgk8fXUkKn8aDNpyqZP", "r4pMXbjMUVCrqcSzh25W1J1U3yJ5U4rjG6kdCwry");

  });
});

app.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,  $cordovaFacebookProvider) {

	$stateProvider
    .state('signup',{
      url: "/signup",
      templateUrl:"views/login/signup.html",
      controller: 'SignupCtrl'
    })
    .state('login',{
      url: "/login",
      templateUrl:"views/login/login.html",
      controller: 'LoginCtrl'
    })
		.state('tabs', {
			url: "/app",
      abstract: true,
			templateUrl: "views/app/tabs.html"
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
    .state('tabs.terms',{
          url: "/terms",
          views:{
            'tabs-home':{
              templateUrl: "views/app/terms.html"
            }
          }
        })
    .state('tabs.faq',{
          url: "/faq",
          views:{
            'tabs-home':{
              templateUrl: "views/app/faq.html"
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
    .state('tabs.cadastro',{
      url: "/cadastro",
      views:{
        'tabs-cadastro':{
        templateUrl: "views/app/cadastro/index.html"
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
  if(window.localStorage['tutorial'] === "true") {
	   $urlRouterProvider.otherwise('/app/home');
  }else{
    $urlRouterProvider.otherwise('/intro');
  }
  if(localStorage.getItem("LocalData") == null)
    {
        var data = [];
        data = JSON.stringify(data);
        localStorage.setItem("LocalData", data);
    }
});
