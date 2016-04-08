'use strict';
describe('Controller: <%= scriptClassName %>Ctrl', function() {
    
    var vm;
    // load the controller's module
    beforeEach(module('<%= scriptAppName %>'));
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$controller_) {
        vm = _$controller_('<%= scriptClassName %>Ctrl');
    }));
    it('should attach a list of awesomeThings to the scope', function() {
        expect(vm.awesomeThings.length).toBe(3);
    });
});
