'use strict';

describe('myApp.aplazamiento module', function() {

  beforeEach(module('myApp.aplazamiento'));

  describe('aplazamiento controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var view2Ctrl = $controller('AplazamientoCtrl', {$scope: $scope});
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
