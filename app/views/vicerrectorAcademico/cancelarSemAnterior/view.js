'use strict';

angular.module('myApp.vicerrectorAcademicoCancelarSemAnterior', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/vicerrectorAcademico/cancelarSemAnterior', {
    templateUrl: 'views/vicerrectorAcademico/cancelarSemAnterior/view.html',
    controller: 'VicerrectorAcademicoCancelarSemAnteriorCtrl'
  });
}])

.controller('VicerrectorAcademicoCancelarSemAnteriorCtrl', ['$scope', function($scope) {
  $scope.m = {};
  $scope.mFields = [{
    "type": "input",
    "key": "Tipo",
    "templateOptions": {
      "label": "Tipo",
      "required": true,
      "type": "text"
    }
  }, {
    "type": "input",
    "key": "Motivo",
    "templateOptions": {
      "label": "Motivo",
      "required": false,
      "type": "text"
    }
  }, {
    "type": "input",
    "key": "Observaciones",
    "templateOptions": {
      "label": "Observaciones",
      "required": false,
      "type": "text"
    }
  }, {
    "type": "input",
    "key": "NumFoliosAnexados",
    "templateOptions": {
      "label": "Número de Folios Anexados",
      "required": false,
      "type": "number"
    }
  }];
}]);
