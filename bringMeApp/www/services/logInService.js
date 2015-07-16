app.factory('logInService', ['$http', '$rootScope', function($http, $rootScope) {
	return {
		logIn: function(credentials) {
			var credentials = JSON.stringify(credentials);
			return $http.post("/api/users/login", credentials);
		},
		userAuth: function() {
			return $rootScope.user.data;
		},
		logOut: function() {
			$rootScope.user.data = '';
			return $http.post("/api/users/logout", '');
		}
	}
}]);

  