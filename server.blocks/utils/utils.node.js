modules.define('utils',
    ['config'],
    function(provide, config) {

    var vow   = require('vow'),
        path  = require('path'),
        utils = this,
        cwd   = process.cwd(),
        url   = require('url');

    /**
     * Check development env
     * @returns {boolean}
     */
    utils.isDev = function() {
        return 'development' === config.get('env') || 'testing' === config.get('env');
    };
    /**
     * Check stage env
     * @returns {boolean}
     */
    utils.isStage = function() {
        return 'stage' === config.get('env');
    };
    /**
     * Resolve path to bundle files
     * @param {String} bundle - bundle name
     * @returns {String}
     */
    utils.resolveBundlePath = function(bundle) {
        return path.join(cwd, 'desktop.bundles', bundle);
    };
    /**
     * Resolve path to bundle files
     * @param {Object} data - bundle config
     * @param {String} postfix - bundle extension
     * @returns {String}
     */
    utils.getTemplateEngine = function(data, postfix) {
        return path.join(cwd, data.level + '.bundles', data.bundle, data.bundle + postfix);
    };
    /**
     * Resolve path to static files
     * @param {Object} data - static config
     * @returns {String}
     */
    utils.getStaticLevel = function(data) {
        return path.join(cwd, data.level + '.bundles', data.bundle);
    };

    /**
     * Resolve path to assets files
     * @param {Object} data - assets config
     * @returns {String}
     */
    utils.getAssetsBlocks = function(data) {
        return path.join(cwd, data.level + '.blocks');
    };

    /**
     * Build app full url
     * @param {Object} req - current request
     * @returns {string}
     */
    utils.getAppOriginalUrl = function(req) {
        var origin = req.headers['madison-context-root'];
        if(origin) return origin;

        var parsed = url.parse(req.url);
        if(parsed.host) return (parsed.protocol || 'http:') + "//" + parsed.host;

        return '//' + req.get('host');
    };

provide(utils);

});
