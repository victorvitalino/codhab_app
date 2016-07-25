var app = angular.module('codhab.controllers.slider', []);

app.controller('sliderCtrl', function ($scope,$state,$ionicSlideBoxDelegate) {

    $scope.startApp = function() {
        $state.go('app.home');
        window.localStorage['tutorial'] = true;
      };

    // $scope.validaCPF = function(cpf)  {
    //       var numeros, digitos, soma, i, resultado, digitos_iguais;
    //       digitos_iguais = 1;
    //       if (cpf.length < 11)
    //             return false;
    //       for (i = 0; i < cpf.length - 1; i++)
    //             if (cpf.charAt(i) != cpf.charAt(i + 1))
    //                   {
    //                   digitos_iguais = 0;
    //                   break;
    //                   }
    //       if (!digitos_iguais)
    //             {
    //             numeros = cpf.substring(0,9);
    //             digitos = cpf.substring(9);
    //             soma = 0;
    //             for (i = 10; i > 1; i--)
    //                   soma += numeros.charAt(10 - i) * i;
    //             resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    //             if (resultado != digitos.charAt(0))
    //                   return false;
    //             numeros = cpf.substring(0,10);
    //             soma = 0;
    //             for (i = 11; i > 1; i--)
    //                   soma += numeros.charAt(11 - i) * i;
    //             resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    //             if (resultado != digitos.charAt(1))
    //                   return false;
    //             return true;
    //             }
    //       else
    //           return false;
    //         }


    $scope.slideChanged = function($index) {
      $scope.slideIndex = $index;
    };

    // Called to navigate to the main app
    $scope.next = function(index) {
      $ionicSlideBoxDelegate.next();

    };
    $scope.previous = function(index) {
      $ionicSlideBoxDelegate.previous();
      $scope.slideIndex = index;
    };

    $scope.skip = function(){
      $scope.startApp();
    }


    if($scope.slideIndex == 2) {
        $scope.startApp();
        window.localStorage['tutorial'] = true;
    }
});
