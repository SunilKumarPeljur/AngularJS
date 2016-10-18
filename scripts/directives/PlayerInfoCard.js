angular.module('MyApp.directives')
	.directive('playerInfoCard', [
        function () {
			'use strict';
			return {
				restrict: 'E',
				templateUrl: 'scripts/partials/PlayerInfoCard.html',

				scope: {
					player: '='
				},
				controller: function ($scope) {
					$scope.clickMe = function (player) {
						if (player) {
							alert(player.birthDate);
						}
					}
				}
			};
         }]);