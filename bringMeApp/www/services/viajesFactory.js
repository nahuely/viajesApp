app.factory('viajesApi', ['$resource', '$q', function($resource, $q) {
	var viajesApi = $resource('/api/viajes/:_id', {_id: '@_id'});

	function getAllViajes() {
		var deferred = $q.defer();
		viajesApi.query(
			function(data) {
				deferred.resolve(data);
			},
			function(err) {
				deferred.reject(err)
			}
		)
		return deferred.promise;
	}

	function getViaje(viajeId) {
		var deferred = $q.defer();
		viajesApi.get({_id: viajeId},
			function(data) {
				deferred.resolve(data);
			},
			function(err) {
				deferred.reject(err);
			}
		)
		return deferred.promise;
	}

	function saveViaje(viaje) {
		var nuevoViaje = new viajesApi(viaje);
		return nuevoViaje.$save();
	}

	return {
		getAllViajes: getAllViajes,
		getViaje: getViaje,
		saveViaje: saveViaje
	}
}])