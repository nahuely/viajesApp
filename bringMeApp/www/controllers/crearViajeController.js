app.controller('crearViajeController', ['$scope', 'viajesApi', 'logInService', '$state', function($scope, viajesApi, logInService, $state) {
	var userData = logInService.userAuth();
	$scope.viaje = {};

	$scope.objectTypes = [
	    { text: "Tecnologia", checked: false },
	    { text: "Indumentaria", checked: false },
	    { text: "Libros", checked: false },
	    { text: "Otros", checked: false }
  	];

  	$scope.crearViaje = function() {
  		$scope.viaje.objetosAceptados = [];
  		angular.forEach($scope.objectTypes, function(value, key) {
  			if(value.checked) {
  				$scope.viaje.objetosAceptados.push(value.text);  				
  			}
  		})

  		viajesApi.saveViaje($scope.viaje)
  			.then(function(data) {
  				console.log(data);
  				$state.go('home.verViajes');
  			})
  			.catch(function(err) {
  				console.log(err)
  			})
  	}
}])


