'use strict';

angular.module('myApp.aplazamiento', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aplazamiento', {
    templateUrl: 'views/aplazamiento/view.html',
    controller: 'AplazamientoCtrl'
  });
}])

.controller('AplazamientoCtrl', [function() {

}]);
