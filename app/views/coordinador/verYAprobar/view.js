'use strict';

angular.module('myApp.coordinadorVerYAprobar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coordinador/verYAprobar', {
    templateUrl: 'views/coordinador/verYAprobar/view.html',
    controller: 'CoordinadorVerYAprobarCtrl'
  });
}])

.controller('CoordinadorVerYAprobarCtrl', ['$scope', function($scope) {
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
