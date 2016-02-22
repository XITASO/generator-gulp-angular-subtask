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
    .service('<%= scriptClassName %>Service', <%= scriptClassName %>Service);
    
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
