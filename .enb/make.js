var techs = {
    provide : require('enb/techs/file-provider'),
    fileMerge : require('enb/techs/file-merge'),
    bem : require('enb-bem-techs'),
    stylusWithAutoprefixer : require('enb-stylus/techs/css-stylus-with-autoprefixer'),
    browserJs: require('enb-diverse-js/techs/browser-js'),
    nodejs : require('enb-diverse-js/techs/node-js'),
    ym : require('enb-modules/techs/prepend-modules'),
    bh : require('enb-bh/techs/bh-server'),
    bhClient : require('enb-bh/techs/bh-client'),
    htmlFromBemjson : require('enb-bh/techs/html-from-bemjson'),
    borschik : require('enb-borschik/techs/borschik')
};

var fs = require('fs'),
    path = require('path');

module.exports = function(config) {

    config.nodes(['desktop.bundles/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [techs.bem.levels, { levels: [
                { path : path.join('libs', 'bem-core', 'common.blocks'), check : false },
                { path : path.join('libs', 'bem-core', 'desktop.blocks'), check : false },
                { path : path.join('libs', 'bem-components', 'common.blocks'), check : false },
                { path : path.join('libs', 'bem-components', 'desktop.blocks'), check : false },
                { path : path.join('libs', 'bem-grid', 'common.blocks'), check : false },
                { path : path.join('libs', 'bem-typography', 'common.blocks'), check : false },
                { path : path.join('libs', 'bem-typography', 'design', 'common.blocks'), check : false },
                { path : path.join('libs', 'bem-stat-counters', 'common.blocks'), check: false },
                { path : 'common.blocks', check : true },
                { path : 'desktop.blocks', check : true }
            ] }],
            [techs.provide, { target: '?.bemjson.js' }],
            [techs.bem.bemjsonToBemdecl],
            [techs.bem.deps],
            [techs.bem.files],

            [techs.stylusWithAutoprefixer, {
                browsers : [
                    'last 2 versions',
                    'ie 10',
                    'ff 24',
                    'opera 12.16'
                ]
            }],

            [techs.bh, {
                jsAttrName: 'data-bem',
                jsAttrScheme: 'json',
                mimic: 'BEMHTML'
            }],
            [techs.htmlFromBemjson],

            [techs.bem.depsByTechToBemdecl, {
                target: '?.bh.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bh'
            }],
            [techs.bem.deps, {
                target: '?.bh.deps.js',
                bemdeclFile: '?.bh.bemdecl.js'
            }],
            [techs.bem.files, {
                depsFile: '?.bh.deps.js',
                filesTarget: '?.bh.files',
                dirsTarget: '?.bh.dirs'
            }],
            [techs.bhClient, {
                target: '?.browser.bh.js',
                filesTarget: '?.bh.files',
                jsAttrName: 'data-bem',
                jsAttrScheme: 'json',
                mimic: 'BEMHTML'
            }],

            [techs.browserJs],
            [techs.fileMerge, {
                target: '?.pre.js',
                sources: ['?.browser.bh.js', '?.browser.js']
            }],
            [techs.ym, { source: '?.pre.js' }],

            [techs.borschik, { sourceTarget: '?.js', destTarget: '_?.js', freeze: true, minify: true }],
            [techs.borschik, { sourceTarget: '?.css', destTarget: '_?.css', tech: 'cleancss', freeze: true, minify: true }]
        ]);

        nodeConfig.addTargets(['?.html', '_?.css', '_?.js']);
    });

    config.nodes(['server.bundles/*'], function(nodeConfig) {
        nodeConfig.addTech([techs.bem.levels, { levels : [
            { path : path.join('libs', 'bem-core', 'common.blocks'), check : false },
            { path : 'server.blocks', check : true }
        ]}]);

        nodeConfig.addTechs([
            [techs.provide, { target: '?.bemdecl.js' }],
            [techs.bem.deps],
            [techs.bem.files]
        ]);

        nodeConfig.addTechs([
            [techs.nodejs, { target : '?.pre.node.js' }],
            [techs.ym, { target : '?.node.js', source : '?.pre.node.js' }]
        ]);

        nodeConfig.addTargets(['?.node.js']);
    });
};
