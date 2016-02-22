(function () {
    'use strict';
    /**
     * @ngdoc service
     * @name <%= scriptAppName %>.<%= scriptClassName %>
     * @description
     * # <%= scriptClassName %>
     * Factory in the <%= scriptAppName %>.
     */
    angular
        .module('<%= scriptAppName %>')
        .factory('<%= scriptClassName %>', <%= scriptClassName %>);
    
    /** @ngInject */
    function <%= scriptClassName %>() {
  
        var meaningOfLife = 42;
        
        var someMethod = function () {
            return meaningOfLife;
        }
        
        var <%= scriptClassName %> = {
            someMethod: someMethod
        };
        
        return <%= scriptClassName %>
    }
})();
