app.controller('homeController', ['$scope', '$state', 'logInService', function($scope, $state, logInService) {
	$scope.logOut = function() {
		logInService.logOut()
			.then(function(data) {
				console.log(data)
				$state.go('login');
			})
			.catch(function(err) {
				console.log(err)
			})
	}
}])