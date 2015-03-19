modules.define('router',
    ['log'],
    function(provide, log) {

    var express = require('express'),
        router  = express();

    router.get('/', function(req, res, next) {
        req.view = { block : 'protein' };

        next();
    });

provide(router);

});
