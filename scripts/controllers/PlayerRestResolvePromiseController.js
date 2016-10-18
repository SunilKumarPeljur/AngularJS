angular.module('MyApp.controllers')
	.controller('PlayerRestResolvePromiseController', ['PlayerResteResolvePromiseService',
        function (PlayerResteResolvePromiseService) {
			'use strict';
			var promise = PlayerResteResolvePromiseService.getPlayers();
			self = this;
			this.players = [];
			promise.then(function (players) {
				self.players = players;
				console.log('Loaded.')
			}).catch(function (reason) {
				console.log(reason);
			}).finally(function () {
				console.log('Inside Finally');
			});
			console.log('This message should be shown before "Loaded".');
         }]);