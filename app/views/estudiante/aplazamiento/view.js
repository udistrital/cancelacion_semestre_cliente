'use strict';

angular.module('myApp.aplazamiento', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/aplazamiento', {
    templateUrl: 'views/estudiante/aplazamiento/view.html',
    controller: 'AplazamientoCtrl'
  });
}])

.controller('AplazamientoCtrl', [function() {

}]);
