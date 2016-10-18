angular.module('MyApp.services')
	.service('PlayerRestService', ['$http',
        function ($http) {
			'use strict';
			this.getPlayers = function () {
				return $http({
					method: 'GET',
					url: 'http://localhost:8888/players'
				});
			}
         }]);