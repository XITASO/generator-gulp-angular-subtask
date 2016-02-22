(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name <%= scriptAppName %>.controller:<%= scriptClassName %>Ctrl
   * @description
   * # <%= scriptClassName %>Ctrl
   * Controller of the <%= scriptAppName %>
   */
  angular
    .module('<%= scriptAppName %>')
    .controller('<%= scriptClassName %>Ctrl', <%= scriptClassName %>Ctrl);
    
    /** @ngInject */
    var <%= scriptClassName %>Ctrl = function () {
      vm = this;
      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }    
    
})();
