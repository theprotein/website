modules.require(
    ['log', 'config', 'router'],
    function(log, config, router) {

    var path    = require('path'),
        cwd     = process.cwd(),
        vow     = require('vow'),
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

    app.use(express.static(path.join(cwd, 'desktop.bundles', 'index')));

    app.use('/assets.bundles', express.static(path.join(cwd, 'assets.bundles')));
    app.use('/assets.bundles', express.static(path.join(cwd, 'assets.blocks')));

    app.post('/system/log', log.middle);

    app.use(router);

    app.listen(process.env.PORT || config.get('port'), function(err) {
        log.info('start worker: ' + process.env.WORKER_ID);
        log.info('start PID: ' + process.pid);

        log.verbose('protein-landing started on port:' + config.get('port'));
        log.verbose('protein-landing environment: ' + config.get('env'));
    });

});
