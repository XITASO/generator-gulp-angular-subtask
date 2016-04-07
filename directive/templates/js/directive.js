(function () {
    'use strict';
    /**
     * @ngdoc directive
     * @name quizAppAdmin.directive:test
     * @description
     * # test
     */
    angular.module('<%= scriptAppName %>')
        .directive('<%= scriptClassName %>', function () {
            return {
                template: '<div></div>',
                restrict: 'E',
                link: function (scope, element, attrs) {
                    element.text('this is the <%= scriptClassName %> directive');
                }
            };
        });
})();
