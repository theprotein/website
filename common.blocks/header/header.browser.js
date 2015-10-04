/* global modules:false */

/**
 * @module header
 */

modules.define(
    'header',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * @exports
 * @class header
 * @bem
 */
provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            'inited': function() {
                var h = this.domElem.height();
                this.bindToWin('scroll', function(e) {
                    var t = BEMDOM.win.scrollTop();
                    var brp = 570;

                    if (t > h) {
                        if (t < brp) this.delMod('visible');
                    } else this.setMod('visible');

                    if (t > brp - 100) this.setMod('fixed');
                    else this.delMod('fixed');

                    if (t > brp) this.setMod('visible');

                });
            }
        }
    }
}));

});

