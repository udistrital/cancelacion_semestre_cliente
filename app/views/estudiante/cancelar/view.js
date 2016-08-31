'use strict';

angular.module('myApp.cancelar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/cancelar', {
    templateUrl: 'views/estudiante/cancelar/view.html',
    controller: 'CancelarCtrl'
  });
}])

.controller('CancelarCtrl', [function() {

}]);
