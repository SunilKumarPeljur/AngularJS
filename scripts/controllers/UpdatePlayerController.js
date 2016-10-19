angular.module('MyApp.controllers')
	.controller('UpdatePlayerController', ['$scope', '$state', '$stateParams', 'Player',
        function ($scope, $state, $stateParams, Player) {
			$scope.loadPlayer = function () {
				$scope.player = Player.get({
					id: $stateParams.id
				})
			}
			$scope.loadPlayer();

			$scope.updatePlayer = function () {
				$scope.player.$update(function () {
					$state.go('players');
				})
			}
         }]);