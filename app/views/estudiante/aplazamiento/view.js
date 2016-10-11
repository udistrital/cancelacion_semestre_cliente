'use strict';

angular.module('myApp.aplazamiento', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/aplazamiento', {
    templateUrl: 'views/estudiante/aplazamiento/view.html',
    controller: 'AplazamientoCtrl',
    resolve: {
      resolvedTipoCancelacion: ['TipoCancelacionFactory', function(TipoCancelacionFactory) {
        return TipoCancelacionFactory.query()
      }]
    }
  })
}])

.controller('AplazamientoCtrl', [
  '$scope',
  'AplazamientoFactory',
  'resolvedTipoCancelacion',
  '$location',
  function(
    $scope,
    AplazamientoFactory,
    resolvedTipoCancelacion,
    $location
  ) {

    $scope.m = {}
    $scope.mFields = [{
      "type": "select",
      "key": "IdTipo",
      "templateOptions": {
        "label": "Tipo",
        "required": true,
        "valueProp": "Id",
        "labelProp": "Tipo",
        "options": resolvedTipoCancelacion
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
      var selectedIdTipo = {
        "Id": $scope.m.IdTipo,
        "Tipo": "",
        "Descripcion": ""
      }
      $scope.m.IdTipo = selectedIdTipo;
      AplazamientoFactory.save($scope.m, function() {
        $scope.m = AplazamientoFactory.query()
        $location.path('/estudiante/ver').replace()
      })
    }

  }
])


.factory('AplazamientoFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/cancelacion_semestre/:id');
}])

.factory('TipoCancelacionFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/tipo_cancelacion_semestre/:id');
}])
