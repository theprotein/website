var techs = require('./techs'),
    configurePage = require('./helpers/page');

module.exports = function(project) {
    project.setLanguages(['ru', 'en']);

    project.node('public/index', function (node) {
        node.addTech([techs.files.provide, { target : '?.bemjson.js' }]);

        configurePage(node, {
            platform : 'common'
        });
    });

};
