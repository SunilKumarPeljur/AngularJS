angular.module('MyApp.controllers')
	.controller('RestController', ['RestService',

        function (RestService) {
			'use strict';
			console.log(RestService.query());
			console.log(RestService.get({
				'resource_id': 1
			}));
         }]);