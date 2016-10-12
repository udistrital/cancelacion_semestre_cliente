'use strict';

angular.module('myApp.coordinadorVerYAprobar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coordinador/verYAprobar', {
    templateUrl: 'views/coordinador/verYAprobar/view.html',
    controller: 'CoordinadorVerYAprobarCtrl',
    resolve: { //http://www.jvandemo.com/how-to-resolve-angularjs-resources-with-ui-router/
      resolvedCancelacionSemestre: ['CancelacionSemestreFactory', function(CancelacionSemestreFactory) {
        return CancelacionSemestreFactory.query().$promise
      }],
      resolvedTipoCancelacion: ['TipoCancelacionFactory', function(TipoCancelacionFactory) {
        return TipoCancelacionFactory.query().$promise
      }],
      resolvedEstadoCancelacion: ['EstadoCancelacionFactory', function(EstadoCancelacionFactory) {
        return EstadoCancelacionFactory.query().$promise
      }]
    },
  })
}])

.controller('CoordinadorVerYAprobarCtrl', [
  '$scope',
  '$filter',
  'CancelacionSemestreFactory',
  'resolvedCancelacionSemestre',
  'resolvedTipoCancelacion',
  'resolvedEstadoCancelacion',
  function(
    $scope,
    $filter,
    CancelacionSemestreFactory,
    resolvedCancelacionSemestre,
    resolvedTipoCancelacion,
    resolvedEstadoCancelacion
  ) {
    $scope.m = {}
    console.log('aqui', resolvedCancelacionSemestre, resolvedTipoCancelacion, resolvedEstadoCancelacion)
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
      var row = item.row
      row.IdEstado = $filter('filter')(resolvedEstadoCancelacion, '0')[0]
      CancelacionSemestreFactory.update({
        id: id
      }, row, function() {
        //$scope.m = CancelacionSemestreFactory.query()
        //$location.path('/estudiante/ver').replace()
        juu.showMessage('Actualización correcta')
          //item.statusChange = !item.statusChange
      })
    }
  }
])
