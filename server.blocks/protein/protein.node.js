modules.define('protein',
    ['log', 'config', 'utils', 'router', 'page'],
    function(provide, log, config, utils, router, page) {

    var vow     = require('vow'),
        express = require('express'),
        path    = require('path'),
        cookies = require('cookie-parser'),
        session = require('express-session'),
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

    // Use local static resources in dev and stage env
    (utils.isDev() || utils.isStage()) && app.use(express.static(utils.getStaticLevel(config.get('static'))));

    // Setup log middleware
    app.post('/system/log', log.middle);

    app.use(router);

    app.use(page);

provide(app);

});
