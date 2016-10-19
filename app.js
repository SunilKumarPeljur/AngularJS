angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters',
	'ui.router',
	'ngGrid'
]).config(
	function ($stateProvider, $httpProvider) {
		'use strict';
		$stateProvider.state('players', {
			url: '/players',
			templateUrl: 'scripts/partials/Players.html',
			controller: 'PlayersListController as PlayersListCtrl',
			resolve: {
				Player: 'Player',
				players: function (Player) {
					return Player.query().$promise;
				}
			}
		}).state('playerDetails', {
			url: '/players/:id/view',
			templateUrl: 'scripts/partials/PlayersDetails.html',
			controller: 'PlayerDetailsController as PlayerDtCtrl'
		}).state('addPlayer', {
			url: '/players/new',
			templateUrl: 'scripts/partials/AddPlayer.html',
			controller: 'AddPlayerController as AddPlayerCtrl'
		}).state('updatePlayer', {
			url: '/players/:id/update',
			templateUrl: 'scripts/partials/UpdatePlayer.html',
			controller: 'UpdatePlayerController as UpdatePlayerCtrl'
		})
	}
).factory([
    function () {
		'use strict';
		/*your code */
    }
]).run(
	function ($state) {
		'use strict';
		$state.go('players');
	}
);

angular.module('MyApp.controllers', []);
angular.module('MyApp.services', ['ngResource']);
angular.module('MyApp.providers', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.filters', []);