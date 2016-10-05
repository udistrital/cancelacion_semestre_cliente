'use strict';

angular.module('myApp.cancelar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/cancelar', {
    templateUrl: 'views/estudiante/cancelar/view.html',
    controller: 'CancelarCtrl'
  });
}])

.controller('CancelarCtrl', ['$scope', 'CancelarFactory', function($scope, CancelarFactory) {
  $scope.m = {}
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
  }]

  $scope.save = function() {
    window.alert()
    CancelarFactory.save($scope.m, function() {
      $scope.m = CancelarFactory.query();
      $scope.clear();
    })
  }
}])

.factory('CancelarFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/cancelacion_semestre/:id', {}, {
    'query': {
      method: 'GET',
      isArray: true,
      interceptor: {
        responseError: function(response) {
          console.log(response)
          window.alert(response.data)
        }
      }
    },
    'save': { //stackoverflow.com/questions/20584367/how-to-handle-resource-service-errors-in-angularjs
      method: 'POST',
      interceptor: {
        responseError: function(response) {
          console.log(response)
          window.alert(response.data)
        }
      }
    },
    'get': {
      method: 'GET',
      interceptor: {
        responseError: function(response) {
          console.log(response)
          window.alert(response.data)
        }
      }
    },
    'update': {
      method: 'PUT',
      interceptor: {
        responseError: function(response) {
          console.log(response)
          window.alert(response.data)
        }
      }
    }
  });
}])
