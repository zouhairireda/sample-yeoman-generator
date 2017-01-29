(function() {
  'use strict';

  angular
    .module('gulpangularyo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
