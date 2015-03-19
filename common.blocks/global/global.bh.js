module.exports = function(bh) {
    bh.match('global', function(ctx) {
        return [{
            block : 'page',
            mods : { theme : 'proto' },
            styles : [
                { elem : 'css', url : 'index.min.css' }
            ]
        }];
    });
};
