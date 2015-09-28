/* global modules:false */

/**
 * @module technology
 */

modules.define(
    'technology',
    ['i-bem__dom', 'control'],
    function(provide, BEMDOM, Control) {

/**
 * @exports
 * @class technology
 * @bem
 */
provide(BEMDOM.decl({ block: this.name, baseBlock: Control }));

});

