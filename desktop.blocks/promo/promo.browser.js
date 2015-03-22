modules.define('promo',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;

                this._actions = this.elem('actions');

                this._button = this.findBlockInside('actions', 'button');

                this._button.bindTo('mouseenter', function() {
                    _this.setMod('colorized', true);
                });

                this._button.bindTo('mouseleave', function() {
                    _this.delMod('colorized');
                });
            }
        }
    }

}));

});
