angular.module('MyApp.controllers')
	.controller('PlayerDetailsController', ['$scope', '$stateParams', 'Player',
        function ($scope, $stateParams, Player) {
			'use strict';
			$scope.player = Player.get({
				id: $stateParams.id
			})
         }]);