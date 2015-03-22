modules.require(
    ['config', 'log', 'utils', 'protein'],
    function(config, log, utils, protein) {

    var express = require('express'),
        global  = express();

    /**
     * Mount protein dynamic
     */
    global.use(protein);

    global.listen(process.env.PORT || config.get('port'), function(err) {
        log.info('start worker: ' + process.env.WORKER_ID);
        log.info('start PID: ' + process.pid);

        log.verbose('protein-landing started on port:' + config.get('port'));
        log.verbose('protein-landing environment: ' + config.get('env'));
    });

});
