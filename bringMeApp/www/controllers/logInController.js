app.controller('logInController', ['$scope', '$state', '$http', 'logInService', '$rootScope', function($scope, $state, $http, logInService, $rootScope) {
	$scope.user = {};

	$scope.logIn = function() {
		logInService.logIn({username: $scope.user.usuario, password: $scope.user.password})
			.then(function(data, status) {
				$rootScope.user = data;
				$scope.user.usuario = '';
				$scope.user.password = '';
				$state.go('home.verViajes');
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}])