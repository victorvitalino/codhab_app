// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('codhab', ['ionic',
'ngCordova',
'ngMessages',
'angularMoment',
'parse-angular',
'parse-angular.enhance',
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
;

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    Parse.initialize("0nHHDsgXpUZieEkv46JhEKgk8fXUkKn8aDNpyqZP", "r4pMXbjMUVCrqcSzh25W1J1U3yJ5U4rjG6kdCwry");

      window.fbAsyncInit = function() {
          Parse.FacebookUtils.init({
              appId      : '1248184141874382',
              version    : 'v2.3',
              xfbml      : true
          });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

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
		.state('app', {
			url: "/app",
      abstract: true,
			templateUrl: "views/app/side.html"
		})
    .state('app.home', {
      url: "/home",
      views:{
        'home':{
          templateUrl: "views/app/home.html",
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.messages',{
      url: "/messages",
      views:{
        'home':{
          templateUrl: "views/app/message/messages.html",
          controller: 'MessageListCtrl'
        }
      }
    })
    .state('app.habitacao',{
      url: "/habitacao",
      views:{
        'home':{
          templateUrl: "views/app/habitacao/index.html"
        }
      }
    })
    .state('app.oquehabitacao',{
      url: "/oque_habitacao",
      views:{
        'home':{
          templateUrl: "views/app/habitacao/oque_habitacao.html"
        }
      }
    })
    .state('app.agendamentohabitacao',{
      url: "/agendamento",
      views:{
        'home':{
          templateUrl: "views/app/habitacao/agendamento.html"
        }
      }
    })
    .state('app.listahabitacao',{
      url: "/listahabitacao",
      views:{
        'home':{
          templateUrl: "views/app/habitacao/listahabitacao.html",
          controller: 'SearchCtrl'
        }
      }
    })
    .state('app.regularizacao',{
      url: "/regularizacao",
      views:{
        'home':{
          templateUrl: "views/app/regularizacao/index.html"
        }
      }
    })
    .state('app.oqueregularizacao',{
      url: "/oque_regularizacao",
      views:{
        'home':{
          templateUrl: "views/app/regularizacao/oque_regularizacao.html"
        }
      }
    })
    .state('app.listaregularizacao',{
      url: "/listaregularizacao",
      views:{
        'home':{
          templateUrl: "views/app/regularizacao/listaregularizacao.html",
          controller: 'SearchRegCtrl'
        }
      }
    })
    .state('app.agendamentoregularizacao',{
      url: "/agendamentoregularizacao",
      views:{
        'home':{
          templateUrl: "views/app/regularizacao/agendamento.html"
        }
      }
    })
    // .state('app.message',{
    //   url: "/message/:id",
    //   views:{
    //     'home':{
    //       templateUrl: "views/app/message/message.html",
    //       controller: 'MessageListCtrl'
    //     }
    //   }
    // })
    .state('app.terms',{
          url: "/terms",
          views:{
            'home':{
              templateUrl: "views/app/terms.html"
            }
          }
        })
        .state('teste',{
          url: "/teste",
          templateUrl:"views/app/teste.html",
          controller: 'sliderCtrl'
        })
    .state('app.new_message',{
      url: "/new_message",
      views:{
        'home':{
          templateUrl: "views/app/message/new_message.html",
          controller: 'messageCtrl'
        }
      }
    })
    .state('app.map',{
      url: "/map",
      views:{
        'home':{
          templateUrl: "views/app/map/map.html",
          controller: 'MapCtrl'
        }
      }
    })
    .state('app.assistencia',{
      url: "/assistencia",
      views:{
        'home':{
        templateUrl: "views/app/assistencia/index.html",
        controller: 'AssistenciaCtrl'
        }
      }
    })
    .state('app.entidades',{
      url: "/entidades",
      views:{
        'home':{
        templateUrl: "views/app/entidade/index.html"
        }
      }
    })
    .state('app.listaentidades',{
      url: "/listaentidades",
      views:{
        'home':{
        templateUrl: "views/app/entidade/listaentidade.html",
        controller: 'EntidadesCtrl'
        }
      }
    })
    .state('app.oqueentidades',{
      url: "/oqueentidades",
      views:{
        'home':{
        templateUrl: "views/app/entidade/oque_entidade.html"
        }
      }
    })
    .state('app.agendamentoentidades',{
      url: "/entidades",
      views:{
        'home':{
        templateUrl: "views/app/entidade/agendamento.html"
        }
      }
    })
    .state('app.entidade',{
      url:"/entidade/:cnpj?lat&long",
      views:{
        'home':{
          templateUrl:"views/app/entidade/single.html",
          controller:'EntidadeCtrl'
        }
      }
    })
    .state('app.postos',{
      url:"/postos/:id?nome&endereco&hora&coordenador&tel&email&latitude&longitude",
      views:{
        'home':{
          templateUrl:"views/app/assistencia/single.html",
          controller:'PostosCtrl'
        }
      }
    })
    .state('app.report',{
      url: "/report",
      views:{
        'home':{
          templateUrl: "views/app/report/report.html",
          controller: 'reportCreateCtrl'
        }
      }
    })
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "views/app/tabs.html"
    })
	;

   // $ionicConfigProvider.tabs.position('bottom')
	// if none of the above states are matched, use this as the fallback
  if(window.localStorage['tutorial'] === "true") {
	   $urlRouterProvider.otherwise('/app/home');
  }else{
    $urlRouterProvider.otherwise('/teste');
  }
});
