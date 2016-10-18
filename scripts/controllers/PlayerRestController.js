angular.module('MyApp.controllers')
	.controller('PlayerRestController', ['PlayerRestService',
        function (PlayerRestService) {
			'use strict';
			//this.players = PlayerRestService.getPlayers();			
			var promise = PlayerRestService.getPlayers();
			self = this;
			this.players = [];
			promise.then(function (players) {
				self.players = players.data;
				console.log('Loaded.')
			}).catch(function (reason) {
				console.log(reason);
			}).finally(function () {
				console.log('Inside Finally');
			});
			console.log('This message should be shown before "Loaded".');
         }]);