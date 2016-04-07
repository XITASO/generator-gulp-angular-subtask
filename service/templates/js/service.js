(function () {
    'use strict';
    /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= scriptClassName %>
   * @description
   * # <%= scriptClassName %>
   * Service in the <%= scriptAppName %>.
   */
    angular
        .module('<%= scriptAppName %>')
        .service('<%= scriptClassName %>Service', <%= scriptClassName %>ServiceCtrl);

    /** @ngInject */
    var <%= scriptClassName %>ServiceCtrl = function () {
        var vm = this;
        vm.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    };
})();

