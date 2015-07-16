app.controller('viajesController', ['$scope', 'viajesApi', 'logInService', function($scope, viajesApi, logInService) {
	function cargarViajes() {
		viajesApi.getAllViajes()
			.then(function(data) {
				console.log(data);
				$scope.viajes = data;
			})
			.catch(function(err) {
				console.log(err)
			})
			.finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			}) 
	}
	cargarViajes();

	$scope.refreshViajes = function() {
		cargarViajes();
	}
}])