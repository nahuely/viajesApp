app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'logInController'
		})
		.state('home', {
			url: '/home',
			abstract: true,
			templateUrl: 'views/layout/tabs-layout.html',
			controller: 'homeController'
		})
		.state('home.verViajes', {
			url: '/viajes',
			views: {
				'tab-verViajes': {
					templateUrl: 'views/viajesList.html',
					controller: 'viajesController'
				}
			}
		})
		.state('home.verViajeDetail', {
			url: '/viajes/:id',
			views: {
				'tab-verViajes': {
					templateUrl: 'views/viajeDetalle.html',
					controller: 'viajeDetailController'
				}
			}
		})
		.state('home.crearViaje', {
			url: '/crearViaje',
			views: {
				'tab-crearViaje': {
					templateUrl: 'views/viajeForm.html',
					controller: 'crearViajeController'
				}
			}
		})
		.state('home.pedidos', {
			url: '/pedidos',
			views: {
				'tab-pedidos': {
					templateUrl: 'views/pedidosList.html',
					controller: 'pedidosController'
				}
			}
		})
		.state('home.verPedidoDetail', {
			url: '/pedidos/:id',
			views: {
				'tab-pedidos': {
					templateUrl: 'views/pedidoDetalle.html',
					controller: 'pedidoDetailController'
				}
			}
		})/*
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'views/layout/menu-layout.html'
		})
		.state('app.locations', {
			url: '/locations',
			views: {
				'mainContent': {
					templateUrl: 'views/locations.html',
					controller: 'locationController'
				}
			}
		})
		.state('app.locationMap', {
			url: '/map/:lat/:lng/:name',
			views: {
				'mainContent': {
					templateUrl: 'views/locationMap.html',
					controller: 'locationMapController'
				}
			}
		})
		.state('app.teams', {
			url: '/teams',
			views: {
				'mainContent': {
					templateUrl: 'views/teams.html',
					controller: 'teamsController'
				}
			}
		})
		.state('app.teamsDetail', {
			url: '/teams/:id',
			views: {
				'mainContent': {
					templateUrl: 'views/teamsDetail.html',
					controller: 'teamsDetailController'
				}
			}
		})
		.state('app.rules', {
			url: '/rules',
			views: {
				'mainContent': {
					templateUrl: 'views/rules.html'
				}
			}
		})
		.state('app.standing', {
			url: '/standing',
			views: {
				'mainContent': {
					templateUrl: 'views/standing.html',
					controller: 'standingsController'
				}
			}
		})
		.state('app.game', {
			url: '/game/:id',
			views: {
				'mainContent': {
					templateUrl: 'views/game.html',
					controller: 'gameController'
				}
			}
		})*/

	$urlRouterProvider.otherwise('/login');
}])