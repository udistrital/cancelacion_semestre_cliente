'use strict';

angular.module('myApp.estudianteHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/home', {
    templateUrl: 'views/estudiante/home/view.html',
    controller: 'EstudianteHomeCtrl'
  });
}])

.controller('EstudianteHomeCtrl', [function() {

}]);
