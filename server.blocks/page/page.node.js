modules.define('page',
    ['log', 'utils', 'config', 'template'],
    function(provide, log, utils, config, template) {

provide(function(req, res, next) {

    var vow = require('vow'),
        url = require('url').parse(req.url),
        ctx = { block : 'global' };

    if(!req.view) return res.sendStatus(404);

    var data   = req.viewData || {};
    data.view  = req.view;
    data.utils = utils;
    data.req   = req;

    log.verbose('rendering view', data.view);

    // Configure template engines
    res.send(require(utils.getTemplateEngine(config.get('bh'), '.bh.js')).apply(ctx));
    
    next();
});

});
