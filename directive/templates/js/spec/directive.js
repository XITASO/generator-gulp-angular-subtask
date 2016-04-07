(function() {
  'use strict';
  describe('Directive: <%= scriptClassName %>', function() {
    // load the directive's module
    beforeEach(module('<%= scriptAppName %>'));
    var $compile,
      $scope,
      directiveElem;

    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();

      directiveElem = getCompiledElement();
    }));

    function getCompiledElement() {
      var element = angular.element(/*directive html tag*/);
      var compiledElement = $compile(element)($scope);
      $scope.$digest();
      return compiledElement;
    }

    it('should load/show <%= scriptClassName %> html', inject(function() {
      expect(directiveElem.html()).not.toEqual('');
    }));
  });
})();
