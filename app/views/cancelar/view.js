'use strict';

angular.module('myApp.cancelar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cancelar', {
    templateUrl: 'views/cancelar/view.html',
    controller: 'CancelarCtrl'
  });
}])

.controller('CancelarCtrl', [function() {

}]);
