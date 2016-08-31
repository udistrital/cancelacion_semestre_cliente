'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/home', {
    templateUrl: 'views/estudiante/home/view.html',
    controller: 'EstudianteHomeCtrl'
  });
}])

.controller('EstudianteHomeCtrl', [function() {

}]);
