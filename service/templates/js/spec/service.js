'use strict';

describe('Service: <%= scriptClassName %>Service', function () {
    var test;
    beforeEach(module('<%= scriptAppName %>'));
    beforeEach(inject(function (_<%= scriptClassName %>Service_) {
        <%= scriptClassName %> = _<%= scriptClassName %>_;
    }));

    it('should attach a list of awesomeThings to the service', function () {
        expect(<%= scriptClassName %>.awesomeThings.length).toBe(3);
    });

});

