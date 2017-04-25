var app = angular.module('codhab.controllers.login', []);


/*********************************************************************
 * LoginCtrl
 *********************************************************************/

 app.controller('LoginCtrl',function($scope, $state, $http,$ionicPlatform){
     $scope.formData = {
      "cpf": "",
      "password": ""
      };
    $scope.getData = function () {
      var data = {
        "cpf": $scope.formData.cpf,
        "password": $scope.formData.password
        }
        $http.post("http://mobile.codhab.df.gov.br/auth?cpf="+$scope.formData.cpf+'&password='+$scope.formData.password)
             .success(function (data, status, headers, config){
                console.log(data)
                for (var k in data){
                  if (k == 'data'){
                    var y = data[k];
                    if(y.message == 'success'){
                       window.localStorage['cpf_logado'] = y.cpf;
                       $scope.cpf_logados = localStorage['cpf_logado'];
                       window.location.reload();
                       $state.go('tabs.home');
                    }else{
                      alert("CPF ou senha errados.")
                    }
                  }
                }

             }).error(function(data, status, headers, config){
               alert("Você está sem conexão, ou ela está lenta, tente mais tarde.")
             }).then(function(result){
             });
    }
    $scope.cnpj_logados = localStorage['cnpj_logado']
    $scope.check_entidade = function(){
      if(window.localStorage['cnpj_logado'] === undefined || window.localStorage['cnpj_logado'] === null || window.localStorage['cnpj_logado'] === '' || window.localStorage['cnpj_logado'] === ' '){
        return true;
      }else{
        return false;
      }
    }
});
  /*********************************************************************
   * SignupCtrl
   *********************************************************************/
  app.controller('SignupCtrl', function ($scope, $state, AuthService) {

  	$scope.formData = {
  		"name": "",
  		"email": "",
      "cpf":"",
  		"password": ""
  	};

  	$scope.signup = function (form) {
  		if (form.$valid){

  			console.log("SignupCtrl::signup")
  			AuthService.signup($scope.formData.email,
  				$scope.formData.name,
          $scope.formData.cpf,
  				$scope.formData.password)
  		} else {
  			console.log("Invalid")
  		}
  	};
  });
