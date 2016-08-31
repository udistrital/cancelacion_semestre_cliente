'use strict';

angular.module('myApp.retiro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/retiro', {
    templateUrl: 'views/estudiante/retiro/view.html',
    controller: 'RetiroCtrl'
  });
}])

.controller('RetiroCtrl', [function() {

}]);
