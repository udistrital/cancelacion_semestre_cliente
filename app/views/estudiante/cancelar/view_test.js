'use strict';

describe('myApp.cancelar module', function() {

  beforeEach(module('myApp.cancelar'));

  describe('cancelar controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var cancelamientoCtrl = $controller('CancelarCtrl', {$scope: $scope});
      expect(cancelamientoCtrl).toBeDefined();
    }));

  });
});
