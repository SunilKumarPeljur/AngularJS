angular.module('MyApp.controllers')
    .controller('MyDataController', ['$scope', 'MyDataService',
        function ($scope, MyDataService) {
            'use strict';

            $scope.names = MyDataService.getNames();

            $scope.addName = function () {
                //prompt('Please enter a name');
                if ($scope.newName) {
                    MyDataService.addName($scope.newName);
                    $scope.newName = '';
                }
            }

            $scope.removeName = function () {
                var index = document.querySelector('#nameList').options.selectedIndex;
                if (index !== -1) {
                    MyDataService.removeName(index);
                }
            }

         }]);