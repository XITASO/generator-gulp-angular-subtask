(function () {
    'use strict';
    /**
     * @ngdoc service
     * @name <%= scriptAppName %>.<%= scriptClassName %>
     * @description
     * # test
     * Factory in the <%= scriptAppName %>.
     */
    angular
        .module('<%= scriptAppName %>')
        .factory('<%= scriptClassName %>Factory', <%= scriptClassName %>Factory);

    /** @ngInject */
    function <%= scriptClassName %>Factory() {

        var meaningOfLife = 42;

        var someMethod = function () {
            return meaningOfLife;
        };

        var <%= scriptClassName %> = {
            someMethod: someMethod
        };

        return <%= scriptClassName %>;
    }
})();


