'use strict'

describe('myApp.aplazamiento module', function() {

  var resolvedTipoCancelacion,
    resolvedEstadoCancelacion,
    resolvedCancelacionSemestre,
    $resource,
    $controller,
    $filter

  beforeEach(function() {
    module('myApp.aplazamiento')

    inject(function(_$resource_, _$controller_, _$filter_) {
      $resource = _$resource_
      $controller = _$controller_
      $filter = _$filter_
    })

    resolvedTipoCancelacion = [{
      "Descripcion": "string",
      "Id": 0,
      "Tipo": "string"
    }, {
      "Id": 1,
      "Tipo": "tipo1",
      "Descripcion": "desc tipo1"
    }]

    resolvedEstadoCancelacion = [{
      "Id": 1,
      "Estado": "primer estado",
      "Descripcion": "desc primer estado"
    }, {
      "Id": 2,
      "Estado": "primer estado",
      "Descripcion": "desc primer estado"
    }]

    resolvedCancelacionSemestre = [{
      "Id": 0,
      "IdEstado": {
        "Descripcion": "string",
        "Estado": "string",
        "Id": 0
      },
      "IdEstudiante": {},
      "IdTipo": {
        "Descripcion": "string",
        "Id": 0,
        "Tipo": "string"
      },
      "Motivo": "string",
      "MotivoEstadoAprobado": "string",
      "NumFoliosAnexados": {},
      "Observaciones": "string",
      "Uid": 0
    }]
  })

  describe('aplazamiento controller', function() {

    it('should ....', inject(function() {
      //spec body
      var $scope = {}

      var CancelacionSemestreFactory = $resource('http://localhost/oas_cancelacion_semestre/v1/cancelacion_semestre/:id')

      var myCtrl = $controller('AplazamientoCtrl', {
        $scope: $scope,
        $filter: $filter,
        CancelacionSemestreFactory: CancelacionSemestreFactory,
        resolvedCancelacionSemestre: resolvedCancelacionSemestre,
        resolvedTipoCancelacion: resolvedTipoCancelacion,
        resolvedEstadoCancelacion: resolvedEstadoCancelacion,
      })

      expect(myCtrl).toBeDefined()
    }))

  })

})
