app.controller('pedidoDetailController', ['$scope', '$stateParams', 'logInService', 'pedidosApi', function($scope, $stateParams, logInService, pedidosApi) {
	var userData = logInService.userAuth();
	var idPedido = $stateParams.id;
	$scope.mensaje = {}

	pedidosApi.getPedido(idPedido)
		.then(function(data) {
			$scope.pedido = data;
		})
		.catch(function(err) {
			console.log(err)
		})	

	$scope.enviarMensaje = function(id) {
		var msg = $scope.mensaje.txt;
		$scope.mensaje.txt = '';

		pedidosApi.updatePedido(id, msg)
			.then(function(data) {
				console.log(data)
				$scope.pedido.chat.push({mensaje: msg, idUser: userData._id});
			})
			.catch(function(err) {
				console.log(err)
			})
	}

	$scope.crearPedido = function() {
		var pedido = {};
		pedido.viajeId = $scope.viaje._id;
		pedido.usuarioCreador = $scope.viaje.userId;
		pedido.usuarioQuePide = userData._id;
		pedido.objetoPedido = $scope.mensaje.text;
		pedido.aceptado = null;
		pedido.status = 'negociacion';
		pedido.chat = [];
		pedido.chat.push(
			{
				idUser: userData._id,
				fecha: Date(),
				mensaje: $scope.mensaje.text,
				visto: false
			}
		);

		pedidosApi.savePedido(pedido)
  			.then(function(data) {
  				$scope.closeModal();
  				$state.go('home.pedidos');
  			})
  			.catch(function(err) {
  				console.log(err)
  			})
	}
}])