'use strict';

angular.module('myApp.consejoFacultadVerYAprobar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/consejoFacultad/verYAprobar', {
    templateUrl: 'views/consejoFacultad/verYAprobar/view.html',
    controller: 'consejoFacultadVerYAprobarCtrl',
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

.controller('consejoFacultadVerYAprobarCtrl', [
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

    $scope.change = function(item, target) {
      //console.log(item, target)
      var id = item.$id
      window.alert(id)
      item.viewMore = !item.viewMore
    }
  }
])
