var app = angular.module('codhab.controllers.login', []);


/*********************************************************************
 * LoginCtrl
 *********************************************************************/

 app.controller('LoginCtrl',function($scope, $state, $http){
     $scope.formData = {
      "cpf": "",
      "password": ""
      };
    $scope.getData = function () {
      var data = {
        "cpf": $scope.formData.cpf,
        "password": $scope.formData.password
        }
        $http.post("http://www.codhab.df.gov.br/autentica?cpf="+$scope.formData.cpf+'&password='+$scope.formData.password)
             .success(function (data, status, headers, config){
                console.log(data)
                for (var k in data){
                  if (k == 'data'){
                    var y = data[k];
                    if(y.message == 'success'){
                      // console.log(y.cpf)
                       window.localStorage['cpf_logado'] = y.cpf;
                       $state.go('tabs.area_restrita');

                    }else{
                      alert("CPF ou senha errados.")
                    }
                  }
                }

             }).error(function(data, status, headers, config){
               alert("Você está sem conexão, ou ela está lenta, tente mais tarde.")
             }).then(function(result){
               console.log('foi')
             });
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
