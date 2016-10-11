'use strict';

angular.module('myApp.estudianteHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante', {
    templateUrl: 'views/estudiante/home/view.html',
    controller: 'EstudianteHomeCtrl'
  });
}])

.controller('EstudianteHomeCtrl', ['$scope', function($scope) {
  $scope.m = {};

}])
