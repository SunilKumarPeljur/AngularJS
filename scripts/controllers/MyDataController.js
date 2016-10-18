angular.module('MyApp.controllers')
    .controller('MyDataController', ['$scope', 'MyDataService',
        function ($scope, MyDataService) {
            'use strict';

            this.names = MyDataService.getNames();

            this.addName = function () {
                //prompt('Please enter a name');
                if (this.newName) {
                    MyDataService.addName(this.newName);
                    this.newName = '';
                }
            }

            this.removeName = function () {
                var index = document.querySelector('#nameList').options.selectedIndex;
                if (index !== -1) {
                    MyDataService.removeName(index);
                }
            }

         }]);