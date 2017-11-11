'use strict';

describe('Component: AboutUsComponent', function () {

  // load the controller's module
  beforeEach(module('frupysApp'));

  var AboutUsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AboutUsComponent = $componentController('AboutUsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
