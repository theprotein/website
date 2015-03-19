modules.define('page',
    ['log', 'utils', 'config'],
    function(provide, log, utils, config) {

provide(function(req, res, next) {

    var vow = require('vow'),
        url = require('url').parse(req.url),
        ctx = { block : 'global' };

    if(!req.view) return res.sendStatus(404);

    ctx.view = req.view;

    log.verbose('rendering view', ctx.view);

    res.send(require(utils.getTemplateEngine(config.get('bh'), '.bh.js')).apply(ctx));

    next();
});

});
