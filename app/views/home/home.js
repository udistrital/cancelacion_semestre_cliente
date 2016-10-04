'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.m = {};
  $scope.mFields = [{
    "type": "input",
    "key": "usuario",
    "templateOptions": {
      "label": "Usuario",
      "required": true,
      "type": "text"
    }
  }, {
    "type": "input",
    "key": "password",
    "templateOptions": {
      "label": "Clave",
      "required": true,
      "type": "password"
    }
  }];
  $scope.sendLogin = function() {
    window.alert();
  }
}]);
