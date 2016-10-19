'use strict';

describe('myApp.consejoFacultadVerYAprobar module', function() {

  beforeEach(module('myApp.consejoFacultadVerYAprobar'));

  beforeEach(module('CancelacionSemestreFactory'));
  beforeEach(module('resolvedCancelacionSemestre'));
  beforeEach(module('resolvedTipoCancelacion'));
  beforeEach(module('resolvedEstadoCancelacion'));

  describe('consejoFacultadVerYAprobar controller', function() {

    it('should ....', inject(function($controller, $filter) {
      //spec body
      var $scope = {};

      var homeCtrl = $controller('ConsejoFacultadVerYAprobarCtrl', {
        $scope: $scope,
        $filter: $filter,
        CancelacionSemestreFactory: CancelacionSemestreFactory,
        resolvedCancelacionSemestre: resolvedCancelacionSemestre,
        resolvedTipoCancelacion: resolvedTipoCancelacion,
        resolvedEstadoCancelacion: resolvedEstadoCancelacion,
      });
      expect(homeCtrl).toBeDefined();
    }));

  });
});
