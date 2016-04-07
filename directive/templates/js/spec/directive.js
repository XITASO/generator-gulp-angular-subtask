'use strict';

describe('Directive: test', function () {
    // load the directive's module
    beforeEach(module('quizAppAdmin'));
    var $compile,
        $scope,
        directiveElem;

    beforeEach(inject(function (_$compile_, _$rootScope_) {
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

    it('should load/show test html', inject(function () {
        expect(directiveElem.text()).not.toEqual('');
    }));
});
