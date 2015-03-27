modules.define('protein',
    ['log', 'config', 'utils', 'router', 'page'],
    function(provide, log, config, utils, router, page) {

    var vow     = require('vow'),
        express = require('express'),
        path    = require('path'),
        cookies = require('cookie-parser'),
        session = require('express-session'),
        favicon = require('express-favicon'),
        body    = require('body-parser');

    var app = express();

    app.use(cookies());
    app.use(session({
        secret : 'protein-landing',
        resave : true,
        saveUninitialized : true
    }));
    app.use(body.urlencoded({ extended : true }));
    app.use(body.json());

    app.use(express.static(utils.getStaticLevel(config.get('static'))));
    app.use(express.static(utils.getAssetsBlocks(config.get('assets'))));

    // Setup log middleware
    app.post('/system/log', log.middle);

    app.use(router);

    app.use(page);

provide(app);

});
