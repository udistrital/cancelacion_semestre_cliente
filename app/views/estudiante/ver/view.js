'use strict';

angular.module('myApp.estudianteVer', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/ver', {
    templateUrl: 'views/estudiante/ver/view.html',
    controller: 'EstudianteVerCtrl',
    resolve: {
      resolvedTipoCancelacion: ['TipoCancelacionFactory', function(TipoCancelacionFactory) {
        return TipoCancelacionFactory.query()
      }],
      resolvedEstadoCancelacion: ['EstadoCancelacionFactory', function(EstadoCancelacionFactory) {
        return EstadoCancelacionFactory.query()
      }],
      resolvedCancelacionSemestre: ['CancelacionSemestreFactory', function(CancelacionSemestreFactory) {
        return CancelacionSemestreFactory.query()
      }]
    }
  });
}])

.controller('EstudianteVerCtrl', [
  '$scope',
  '$filter',
  'resolvedTipoCancelacion',
  'resolvedEstadoCancelacion',
  'resolvedCancelacionSemestre',
  function(
    $scope,
    $filter,
    resolvedTipoCancelacion,
    resolvedEstadoCancelacion,
    resolvedCancelacionSemestre
  ) {
    $scope.m = {}
    angular.forEach(resolvedCancelacionSemestre, function(row, index) {
      angular.forEach(row, function(value, key) {
        var filtro = null
        switch (key) {
          case 'IdTipo':
            filtro = $filter('filter')(resolvedTipoCancelacion, value)
            break;
          case 'IdEstado':
            filtro = $filter('filter')(resolvedEstadoCancelacion, value)
            break;
          default:

        }
        if (filtro !== null) {
          resolvedCancelacionSemestre[index][key] = filtro[0]
        }
      })
    })
    $scope.m = resolvedCancelacionSemestre
  }
])
