/*angular.module('MyApp.controllers')
	.controller('PlayersListController', ['Player', 'players',

        function (Player, players) {
			'use strict';
			self = this;
			this.players = players;
         }]);*/

/*angular.module('MyApp.controllers')
	.controller('PlayersListController', ['Player',
        function (Player) {
			'use strict';
			self = this;
			this.players = [];
			var promise = Player.query().$promise;
			promise.then(function (players) {
				self.players = players;
				console.log('Loaded.')
			}).catch(function (reason) {
				alert('Error: ' + reason);
			}).finally(function () {
				console.log('Inside Finally');
			});
			console.log('This message should be shown before "Loaded".');
         }]);*/

//angular.module('MyApp.controllers')
//	.controller('PlayersCtrl', ['$scope', 'Player',
//        function ($scope, Player) {
//			'use strict';
//			//$scope.players = PlayerRestService.query();
//
//			Player.query().$promise.then(function (PlayerResponse) {
//				$scope.players = PlayerResponse
//			}).catch(function (reason) {
//				alert("Reason " + reason)
//			});
//
//         }]);

angular.module('MyApp.controllers')
	.controller('PlayersListController', ['$scope', '$window', 'Player', 'players',
        function ($scope, $window, Player, players) {

			'use strict';

			$scope.players = players;
			this.gridOptions = {
				data: 'players',
				columnDefs: [{
						field: 'name',
						displayName: 'Name'
				},
					{
						field: 'debutYear',
						displayName: 'Debut Year'
				}, {
						field: 'mentor',
						displayName: 'Mentor'
				},
					{
						displayName: 'Actions',
						cellTemplate: '<td>' +
							'<a class="btn btn-primary" ui-sref="playerDetails({id:row.entity._id})">View</a>' +
							'</td>' +
							'<td>' +
							'<a class="btn btn-primary" ui-sref="updatePlayer({id: row.entity._id})">Update</a>' +
							'</td>' +
							'<td>' +
							'<a class="btn btn-danger" ng-click="$event.stopPropogation();deletePlayer(row.entity)">Delete</a>' +
							'</td>'
					}
							],
				rowHeight: 35,
				multiSelect: false
			};

			$scope.deletePlayer = function (player) {
				player.$delete(function () {
					$window.location.href = '';
				});
			}

         }]);