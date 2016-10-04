'use strict';

angular.module('myApp.consejoFacultadVerYAprobar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/consejoFacultad/verYAprobar', {
    templateUrl: 'views/consejoFacultad/verYAprobar/view.html',
    controller: 'ConsejoFacultadVerYAprobarCtrl'
  });
}])

.controller('ConsejoFacultadVerYAprobarCtrl', ['$scope', function($scope) {
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
