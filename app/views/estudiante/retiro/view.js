'use strict';

angular.module('myApp.retiro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/retiro', {
    templateUrl: 'views/estudiante/retiro/view.html',
    controller: 'RetiroCtrl'
  });
}])

.controller('RetiroCtrl', ['$scope', function($scope) {
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
    "key": "Obervaciones",
    "templateOptions": {
      "label": "Obervaciones",
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
