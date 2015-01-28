'use strict';

describe('Controller: EndgamescreenCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsMathGameApp'));

  var EndgamescreenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EndgamescreenCtrl = $controller('EndgamescreenCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
