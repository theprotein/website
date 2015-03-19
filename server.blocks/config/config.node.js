modules.define('config',
    function(provide) {

    var path = require('path'),
        nconf = require('nconf');

    // read options from command line
    nconf.argv();

    // parse process environment
    var env = process.env.NODE_ENV || /* istanbul ignore next */ 'development';

    // load common config file
    nconf.file(path.join('configs', 'common', 'app.json'));

    // load environment-specific config file
    nconf.file('env', path.join('configs', env, 'app.json'));

    nconf.set('env', env);

provide(nconf);

});
