angular.module('MyApp.directives')
	.directive('animateThis', [
        function () {
			'use strict';
			return {
				restrict: 'A',
				link: function ($scope, element, attrs) {
					element.hover(function () {
						$(this).transition({
							scale: 1.1
						})
					}, function () {
						$(this).transition({
							scale: 1
						})
					})
					element.slideDown(10000000);

				}
			};
         }]);