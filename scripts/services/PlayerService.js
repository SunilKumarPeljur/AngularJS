angular.module('MyApp.services')
	.service('PlayerService', [
        function () {
			'use strict';
			let players = [

				{
					name: 'Sachin Tendulkar',
					mentor: 'Sunil Gavaskar',
					birthDate: '20-02-1973',
					friends: [
						'Dravid', 'Ganguly', 'Laxman'
					]
				}, {
					name: 'Rahul Dravid',
					mentor: 'Sunil Gavaskar',
					birthDate: '22-08-1983',
					friends: [
						'Sachin', 'Ganguly', 'Kumble'
					]
				}, {
					name: 'Virendra Sehwag',
					mentor: 'Sachin Tendulkar',
					birthDate: '22-08-1983',
					friends: [
						'Sachin', 'Ganguly', 'Kumble'
					]
				}
			];

			this.getPlayers = function () {
				return players;
			}

         }]);