'use strict';

angular.module('myApp.aplazamiento', ['ngRoute', 'ngResource'])

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
  'CancelacionSemestreFactory',
  'resolvedTipoCancelacion',
  '$location',
  function(
    $scope,
    CancelacionSemestreFactory,
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
      CancelacionSemestreFactory.save($scope.m, function() {
        $scope.m = CancelacionSemestreFactory.query()
        $location.path('/estudiante/ver').replace()
      })
    }

  }
])
