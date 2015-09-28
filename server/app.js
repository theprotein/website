var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    config = require('./config.js'),
    log = require('./log.js');

/*
 * SET
 */
app.set('handle', process.env.PORT || config.express.port);

/**
 * USE
 */
app.use(cookieParser());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/', express.static(path.resolve(__dirname, '../public/index')));

app.post('/system/log', log.middle);

app.listen(app.get('handle'), function() {
    log.info('start worker: ' + process.env.WORKER_ID);
    log.info('NODE_ENV: ' + process.env.NODE_ENV);
    log.info('start PID: ' + process.pid);
    log.verbose('Express server listening on port ' + app.get('handle'));
});
