'use strict';

angular.module('myApp.retiro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/retiro', {
    templateUrl: 'views/retiro/view.html',
    controller: 'RetiroCtrl'
  });
}])

.controller('RetiroCtrl', [function() {

}]);
