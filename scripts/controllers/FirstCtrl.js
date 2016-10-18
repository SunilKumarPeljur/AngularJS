angular.module('MyApp.controllers')
    .controller('FirstController', ['$scope', '$interval',

        function ($scope, $interval) {
            'use strict';
            $scope.model = {
                now: new Date()
            }

            var update = function () {
                $scope.model.now = new Date();
            }

            $interval(function () {
                update();
            }, 1000);

            /* $scope.$watch("model.now", function (newValue, oldValue) {
     console.log(oldValue + " ==> " + newValue);
 });*/
         }
    ]);