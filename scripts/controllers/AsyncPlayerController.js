angular.module('MyApp.controllers')
	.controller('AsyncPlayerController', ['AsyncPlayerService',
        function (AsyncPlayerService) {
			'use strict';
			var promise = AsyncPlayerService.getPlayers();
			self = this;
			this.players = [];
			promise.then(function (players) {
				self.players = players;
				console.log('Loaded.')
			}).catch(function (reason) {
				alert(reason);
			}).finally(function () {
				console.log('Inside Finally');
			});
			console.log('This message should be shown before "Loaded".');
         }]);