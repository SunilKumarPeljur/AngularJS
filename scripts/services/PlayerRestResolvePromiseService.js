angular.module('MyApp.services')
	.service('PlayerResteResolvePromiseService', ['$q', '$http',
        function ($q, $http) {
			'use strict';
			this.getPlayers = function () {
				return $http({
					method: 'GET',
					url: 'http://localhost:8888/players',
					transformResponse: transformData
				}).then(function (players) {
					return players.data;
				}).catch(function (reason) {
					return $q.reject('Status: ' + reasonn.status);
				});
			}

			function transformData(data, headers) {
				var transformed = angular.fromJson(data);

				transformed.forEach(function (currValue, index, prop) {
					currValue.dataDownloaded = new Date();
				});

				return transformed;
			}
         }]);