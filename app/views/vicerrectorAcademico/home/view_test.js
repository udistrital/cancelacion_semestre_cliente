'use strict';

describe('myApp.vicerrectorAcademicoHome module', function() {

  beforeEach(module('myApp.vicerrectorAcademicoHome'));

  describe('vicerrectorAcademicoHome controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var homeCtrl = $controller('VicerrectorAcademicoHomeCtrl', {$scope: $scope});
      expect(homeCtrl).toBeDefined();
    }));

  });
});
