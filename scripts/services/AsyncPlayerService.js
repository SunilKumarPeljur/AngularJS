angular.module('MyApp.services')
	.service('AsyncPlayerService', ['$q', '$timeout',
        function ($q, $timeout) {
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

				var deferred = $q.defer();
				var flag = true;
				$timeout(function () {
					if (flag) {
						deferred.resolve(players);
					} else {
						deferred.reject('Unable to Process');
					}
				}, 3000);
				return deferred.promise;
			}

	}]);