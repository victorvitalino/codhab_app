var app = angular.module('codhab.controllers.login_entidade', []);


/*********************************************************************
 * LoginCtrl
 *********************************************************************/

 app.controller('LoginEntidadeCtrl',function($scope, $state, $http,$ionicPlatform){
     $scope.formData = {
      "cnpj": "",
      "password": ""
      };
    $scope.getData = function () {
      var data = {
        "cnpj": $scope.formData.cnpj,
        "password": $scope.formData.password
        }
        $http.post("http://mobile.codhab.df.gov.br/entity/auth?cnpj="+$scope.formData.cnpj+'&password='+$scope.formData.password)
             .success(function (data, status, headers, config){
                console.log(data)
                for (var k in data){
                  if (k == 'data'){
                    var y = data[k];
                    if(y.message == 'success'){
                       window.localStorage['cnpj_logado'] = y.cnpj;
                       $scope.cnpj_logados = localStorage['cnpj_logado'];
                       //window.location.reload();
                       $state.go('tabs.entidades_area_restrita');
                    }else{
                      alert("CNPJ ou senha errados.")
                    }
                  }
                }

             }).error(function(data, status, headers, config){
               alert("Você está sem conexão, ou ela está lenta, tente mais tarde.")
             }).then(function(result){
             });
    }


    $scope.check = function(){
      // $scope.tabsz = window.localStorage['cpf_logado'];
      if(window.localStorage['cpf_logado'] === undefined || window.localStorage['cpf_logado'] === null || window.localStorage['cpf_logado'] === '' || window.localStorage['cpf_logado'] === ' '){
        return true;
      }else{
        return false;
      }
    }

});
