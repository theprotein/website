var OS = require('os'),
    recluster = require('recluster'),
    path = require('path');

var cluster = recluster(path.join(path.join(__dirname, 'server.bundles', 'index', 'index.node.js')), {
    workers : OS.cpus().length
});

cluster.run();
