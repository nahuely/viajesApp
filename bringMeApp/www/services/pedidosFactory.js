app.factory('pedidosApi', ['$resource', '$q', 'logInService', function($resource, $q, logInService) {
	var pedidosApi = $resource('/api/pedidos/:_id', {_id: '@_id'}, 
	{
    	'update': { method:'PUT' }
    });
	var userData = logInService.userAuth();

	function getAllpedidos() {
		var deferred = $q.defer();
		pedidosApi.query('',
			function(data) {
				deferred.resolve(data);
			},
			function(err) {
				deferred.reject(err)
			}
		)
		return deferred.promise;
	}

	function getPedido(pedidoId) {
		var deferred = $q.defer();
		pedidosApi.get({_id: pedidoId},
			function(data) {
				deferred.resolve(data);
			},
			function(err) {
				deferred.reject(err);
			}
		)
		return deferred.promise;
	}

	function savePedido(pedido) {
		var nuevoViaje = new pedidosApi(pedido);
		return nuevoViaje.$save();
	}

	function updatePedido(pedidoId, chat) {
		var deferred = $q.defer();
		pedidosApi.get({_id: pedidoId},
			function(data) {
				var message = {};
				message.idUser = userData._id;
				message.fecha = Date();
				message.mensaje = chat;
				message.visto = false;
				data.chat.push(message);
				deferred.resolve(data.$update());
			},
			function(err) {
				deferred.reject(err);
			}
		)
		return deferred.promise;
	}

	return {
		getAllpedidos: getAllpedidos,
		getPedido: getPedido,
		savePedido: savePedido,
		updatePedido: updatePedido
	}
}])
