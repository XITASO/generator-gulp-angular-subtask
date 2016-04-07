describe('Factory: <%= scriptClassName %>Factory', function () {
    var <%= scriptClassName %>;
    beforeEach(module('<%= scriptAppName %>'));
    beforeEach(inject(function (_<%= scriptClassName %>_) {
        test = _<%= scriptClassName %>_;
    }));

    it('should provide the meaning of life', function () {
        expect(<%= scriptClassName %>.someMethod() === 42).toBeTruthy();
    });
});
