//Creating serivce using Factory method
/*angular.module('MyApp.services')
    .factory('MyDataService', [
        function () {
            'use strict';
            var names = ['Name1', 'Name2', 'Name3'];
            var addName = function (name) {
                names.push(name);
            }
            var removeName = function (index) {
                names.splice(index, 1);
            }

            var getNames = function () {
                return names;
            }

            return {
                addName: addName,
                removeName: removeName,
                getNames: getNames
            }
         }]);*/

//Creating service using Service method

/*angular.module('MyApp.services')
    .service('MyDataService', [
    function () {
            'use strict';
            this.names = ['Name1', 'Name2', 'Name3'];
            this.addName = function (name) {
                this.names.push(name);
            }
            this.removeName = function (index) {
                this.names.splice(index, 1);
            }
            this.getNames = function () {
                return this.names;
            }
    }]);*/

//Creating service using Provider method
angular.module('MyApp.services')
	.provider('MyDataService', [
    function () {
			'use strict';
			this.$get = function () {
				var names = ['Name1', 'Name2', 'Name3'];
				var addName = function (name) {
					names.push(name);
				}
				var removeName = function (index) {
					names.splice(index, 1);
				}
				var getNames = function () {
					return names;
				}
				return {
					addName: addName,
					removeName: removeName,
					getNames: getNames
				}
			}
    }]);