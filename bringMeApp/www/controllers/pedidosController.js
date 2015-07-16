app.controller('pedidosController', ['$scope', 'pedidosApi', 'logInService', function($scope, pedidosApi, logInService) {
	var userData = logInService.userAuth();
	$scope.yoPido = [];
	$scope.mePiden = [];

	function cargarPedidos() {
		pedidosApi.getAllpedidos()
			.then(function(data) {
				$scope.pedidos = data;
				angular.forEach(data, function(value, key) {
					if(value.usuarioCreador === userData._id) {
						$scope.mePiden.push(value);
					} else {
						$scope.yoPido.push(value);
					}
				})
				console.log($scope.yoPido, $scope.mePiden);
			})
			.catch(function(err) {
				console.log(err)
			})
			.finally(function() {
				$scope.$broadcast('scroll.refreshComplete');
			})
	}
	cargarPedidos();
	console.log(userData)

	$scope.refreshPedidos = function() {
		$scope.yoPido = [];
		$scope.mePiden = [];
		cargarPedidos();
	}
}])

