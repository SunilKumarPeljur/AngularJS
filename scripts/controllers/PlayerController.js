angular.module('MyApp.controllers')
	.controller('PlayerController', ['PlayerService',
        function (PlayerService) {
			'use strict';
			this.getPlayers = PlayerService.getPlayers();
         }]);