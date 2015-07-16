app.controller('viajeDetailController', ['$scope', '$stateParams', 'viajesApi', 'logInService', '$ionicModal', 'pedidosApi', '$state', function($scope, $stateParams, viajesApi, logInService, $ionicModal, pedidosApi, $state) {
	var userData = logInService.userAuth();
	var idViaje = $stateParams.id;
	$scope.mensaje = {};

	viajesApi.getViaje(idViaje)
		.then(function(data) {
			$scope.viaje = data;
		})
		.catch(function(err) {
			console.log(err)
		})

	$ionicModal.fromTemplateUrl('views/pedidoForm.html', {
		scope: $scope,
		animation: 'slide-in-up',
		focusFirstInput: true
	}).then(function(modal) {
		$scope.modal = modal
	})  

	$scope.openModal = function() {
		$scope.modal.show()
	}

	$scope.closeModal = function() {
		$scope.mensaje.text = '';
		$scope.modal.hide();
	};

	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	$scope.crearPedido = function() {
		console.log($scope.viaje, userData, $scope.mensaje);
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
  				console.log(data);
  				$scope.closeModal();
  				$state.go('home.pedidos');
  			})
  			.catch(function(err) {
  				console.log(err)
  			})
	}
}])