angular.module('MyApp.controllers')
	.controller('AddPlayerController', ['$scope', '$state', 'Player',
        function ($scope, $state, Player) {
			'use strict';
			$scope.player = new Player();
			$scope.addPlayer = function () {
				$scope.player.$save(function () {
					$state.go('players');
				});
			}
         }]);