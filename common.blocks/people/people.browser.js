/* global modules:false */

/**
 * @module people
 */

modules.define(
    'people',
    ['i-bem__dom', 'control'],
    function(provide, BEMDOM, Control) {

/**
 * @exports
 * @class people
 * @bem
 */
provide(BEMDOM.decl({ block: this.name, baseBlock: Control }));

});

