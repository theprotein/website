modules.define('yes-you-can',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;

                this._info = this.elem('info');
                this._settings = this.findBlockInside('settings', 'button');
                this._example = this.findBlockInside('control', 'button');

                this._info.text(_this.getCurrentMods());

                this._settings.on('click', function() {
                    _this._example.setMod('view', 'action');

                    _this._info.text(_this.getCurrentMods());
                });
            }
        }
    },

    getCurrentMods : function() {
        var allMods = this._example.getMods();
        delete allMods.theme;
        delete allMods.js;

        return JSON.stringify(allMods);
    }

}));

});
