var winston = require('winston'),
    log = require('./config.js').log;

/**
 * Transport for nodejs logs
  */
var server = new (winston.Logger)({
    transports : [
        new (winston.transports[log.server.transport])(log.server.view)
    ]
});

/**
 * Transport for browser logs
 */
var browser = new (winston.Logger)({
    transports : [
        new (winston.transports[log.browser.transport])(log.browser.view)
    ]
});

/**
 * Middleware for logs from browser
 */
server.middle = function(req, res, next) {
    var msg = req.body;

    msg.meta = msg.meta || null;

    browser[msg.level](msg.message, msg.meta);

    res.status(200).end();
};

module.exports = server;

