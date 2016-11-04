'use strict'

angular.module('myApp.consejoFacultadHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/consejoFacultad', {
    templateUrl: 'views/consejoFacultad/home/view.html',
    controller: 'ConsejoFacultadHomeCtrl'
  })
}])

.controller('ConsejoFacultadHomeCtrl', ['$scope', function($scope) {
  $scope.m = {}
}])
