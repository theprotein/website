/* global modules:false */

/**
 * @module menu-item_scroll-to
 */

modules.define(
    'menu-item',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {

/**
 * @exports
 * @class menu-item_scroll-to
 * @bem
 */
provide(BEMDOM.decl({ block: this.name, modName: 'scroll-to', modVal: true }, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                this.findBlockInside('link')
                    .bindTo('click', function() {
                        $('html, body')
                            .stop()
                            .animate({ scrollTop: $(this._url).offset().top }, '500', 'swing');
                    });
            }
        }
    }
}));

});

