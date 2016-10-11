'use strict';

angular.module('myApp.estudianteVer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/estudiante/ver', {
    templateUrl: 'views/estudiante/ver/view.html',
    controller: 'EstudianteVerCtrl',
    resolve: {
      resolvedCancelacionSemestre: ['CancelacionSemestreFactory', function(CancelacionSemestreFactory) {
        return CancelacionSemestreFactory.query()
      }],
      resolvedTipoCancelacion: ['TipoCancelacionFactory', function(TipoCancelacionFactory) {
        return TipoCancelacionFactory.query()
      }],
      resolvedEstadoCancelacion: ['EstadoCancelacionFactory', function(EstadoCancelacionFactory) {
        return EstadoCancelacionFactory.query()
      }]
    }
  });
}])

.controller('EstudianteVerCtrl', [
  '$scope',
  '$filter',
  'resolvedCancelacionSemestre',
  'resolvedTipoCancelacion',
  'resolvedEstadoCancelacion',
  function(
    $scope,
    $filter,
    resolvedCancelacionSemestre,
    resolvedTipoCancelacion,
    resolvedEstadoCancelacion
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

.factory('CancelacionSemestreFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/cancelacion_semestre/:id');
}])

.factory('TipoCancelacionFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/tipo_cancelacion_semestre/:id');
}])

.factory('EstadoCancelacionFactory', ['$resource', 'CONFIG', function($resource, CONFIG) {
  return $resource(CONFIG.WS_URL + '/estado_cancelacion_semestre/:id');
}])
