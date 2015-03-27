module.exports = function(bh) {
    bh.match('global', function(ctx, json) {
        return [{
            block : 'page',
            mods : { theme : 'proto' },
            title : 'Protein',
            favicon : 'favicon/favicon.png',
            styles : [
                { elem : 'css', url : '//fonts.googleapis.com/css?family=Arvo:700' },
                { elem : 'css', url : '//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' },
                { elem : 'css', url : 'index.min.css' }
            ],
            scripts : [
                '<!--[if lt IE 9]>',
                { elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
                '<![endif]-->',
                { elem : 'js', url : '//yastatic.net/jquery/2.1.3/jquery.min.js' },
                { elem : 'js', url : 'index.min.js' }
            ],
            view : json.view
        }];
    });
};
