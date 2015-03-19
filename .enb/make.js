var DEFAULT_LANGS = ['ru'],
    BEM_TEMPLATE_ENGINE = 'BH',
    fs = require('fs'),
    path = require('path'),
    naming = require('bem-naming'),
    techs = require('enb-bem-techs'),
    provide = require('enb/techs/file-provider'),
    css = require('enb-stylus/techs/css-stylus'),
    autoprefixer = require('enb-autoprefixer/techs/css-autoprefixer'),
    js = require('enb-diverse-js/techs/browser-js'),
    nodejs = require('enb-diverse-js/techs/node-js'),
    ym = require('enb-modules/techs/prepend-modules'),
    bemhtml = require('enb-bemxjst/techs/bemhtml'),
    bemtree = require('enb-bemxjst/techs/bemtree'),
    bh = require('enb-bh/techs/bh-server'),
    bhServerInclude = require('enb-bh/techs/bh-server-include'),
    bhYm = require('enb-bh/techs/bh-client-module'),
    bhHtml = require('enb-bh/techs/html-from-bemjson'),
    html = require('enb-bemxjst/techs/html-from-bemjson'),
    copyFile = require('enb/techs/file-copy'),
    mergeFiles = require('enb/techs/file-merge'),
    borschik = require('enb-borschik/techs/borschik'),
    PLATFORMS = {
        'desktop' : ['common', 'desktop'],
        'touch-phone' : ['common'],
        'touch-pad' : ['common']
    },
    SERVERS = {
        'server' : ['common', 'server']
    },
    SETS = {
        'desktop' : ['common', 'desktop'],
        'touch' : ['common']
    };

module.exports = function(config) {
    var platforms = Object.keys(PLATFORMS),
        servers = Object.keys(SERVERS),
        sets = Object.keys(SETS),
        langs = process.env.BEM_I18N_LANGS;

    config.includeConfig('enb-bem-examples');
    config.includeConfig('enb-bem-docs');
    config.includeConfig('enb-bem-specs');
    config.includeConfig('enb-bem-node-specs');
    config.includeConfig('enb-bem-tmpl-specs');

    config.setLanguages(langs? langs.split(' ') : [].concat(DEFAULT_LANGS));

    configurePlatformsBundles(platforms);
    configureServersBundles(servers);
    configureSets(sets, {
        tests : config.module('enb-bem-examples').createConfigurator('tests'),
        examples : config.module('enb-bem-examples').createConfigurator('examples'),
        docs : config.module('enb-bem-docs').createConfigurator('docs', 'examples'),
        specs : config.module('enb-bem-specs').createConfigurator('specs'),
        tmplSpecs : config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
    });

    configureServerSpecs(config.module('enb-bem-node-specs').createConfigurator('specs'));

    /**
     * Configure paths for platforms bundles
     */
    function configurePlatformsBundles(platforms) {
        platforms.forEach(function(platform) {
            var nodes = [platform + '.bundles/*'];

            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTech([provide, { target : '?.bemdecl.js' }]);
            });

            configurePlatformNodes(platform, nodes);
        });
    }

    function configurePlatformNodes(platform, nodes) {
        configureLevels(platform, nodes);
        configureAutoprefixer(platform, nodes);

        config.nodes(nodes, function(nodeConfig) {
            var langs = config.getLanguages();

            // Base techs
            nodeConfig.addTechs([
                [techs.deps],
                [techs.files]
            ]);

            // Client techs
            nodeConfig.addTechs([
                [css, { target : '?.noprefix.css' }],
                [js, {
                    filesTarget : '?.js.files'
                }],
                [mergeFiles, {
                    target : '?.pre.js',
                    sources : ['?.browser.bh.js', '?.browser.js']
                }],
                [ym, {
                    source : '?.pre.js',
                    target : '?.js'
                }]
            ]);

            // js techs
            nodeConfig.addTechs([
                [techs.depsByTechToBemdecl, {
                    target : '?.js-js.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'js'
                }],
                [techs.mergeBemdecl, {
                    sources : ['?.bemdecl.js', '?.js-js.bemdecl.js'],
                    target : '?.js.bemdecl.js'
                }],
                [techs.deps, {
                    target : '?.js.deps.js',
                    bemdeclFile : '?.js.bemdecl.js'
                }],
                [techs.files, {
                    depsFile : '?.js.deps.js',
                    filesTarget : '?.js.files',
                    dirsTarget : '?.js.dirs'
                }]
            ]);

            // bemtree

            // Client Template Engine
            nodeConfig.addTechs([
                [techs.depsByTechToBemdecl, {
                    target : '?.template.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'bh'
                }],
                [techs.deps, {
                    target : '?.template.deps.js',
                    bemdeclFile : '?.bemdecl.js'
                }],
                [techs.files, {
                    depsFile : '?.template.deps.js',
                    filesTarget : '?.template.files',
                    dirsTarget : '?.template.dirs'
                }],
                [bhYm, {
                    target : '?.browser.bh.js',
                    filesTarget : '?.template.files',
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json',
                    mimic : 'BEMHTML'
                }],
                [bemtree, { devMode : process.env.NODE_ENV === 'development' }]
            ]);

            nodeConfig.addTechs([
                [bh, {
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json'
                }],
                [bhHtml]
            ]);

            nodeConfig.addTargets([
                '?.min.css', '?.min.js', '?.bh.js'
            ]);
        });

        config.mode('development', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [borschik, { source : '?.css', target : '?.min.css', freeze : true }],
                    [borschik, { source : '?.js', target :  '?.borschik.js', minify : false, freeze : false }],
                    [copyFile, { source : '?.borschik.js', target :  '?.min.js' }]
                ]);
            });
        });

        config.mode('stage', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [borschik, { source : '?.css', target : '?.min.css', freeze : true }],
                    [borschik, { source : '?.js', target :  '?.borschik.js', minify : false, freeze : false }],
                    [copyFile, { source : '?.borschik.js', target :  '?.min.js' }]
                ]);
            });
        });

        config.mode('production', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [borschik, { source : '?.css', target : '?.min.css', freeze : true, tech : 'cleancss' }],
                    [borschik, { source : '?.js', target : '?.min.js', freeze : true }]
                ]);
            });
        });
    }

    function configureAutoprefixer(platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {
            nodeConfig.addTechs([
                [autoprefixer, {
                    sourceTarget : '?.noprefix.css',
                    destTarget : '?.css',
                    browserSupport : getBrowsers(platform)
                }]
            ]);
        });
    }

    /**
     * Configure paths for server bundles
     */
    function configureServersBundles(servers) {
        servers.forEach(function(platform) {
            var nodes = [platform + '.bundles/*'];

            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTech([provide, { target : '?.bemdecl.js' }]);
            });

            configureServerNodes(platform, nodes);
        });
    }

    function configureServerNodes(server, nodes) {
        configureLevels(server, nodes);

        config.nodes(nodes, function(nodeConfig) {

            // Base techs
            nodeConfig.addTechs([
                [techs.deps],
                [techs.files]
            ]);

            // Server techs
            nodeConfig.addTechs([
                [nodejs, {
                    target : '?.pre.node.js'
                }],
                [ym, {
                    source : '?.pre.node.js',
                    target : '?.node.js'
                }]
            ]);

            nodeConfig.addTargets([
                '?.node.js'
            ]);
        });

        config.mode('development', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [borschik, { source : '?.js', target :  '?.borschik.js', minify : false, freeze : false }],
                    [copyFile, { source : '?.borschik.js', target :  '?.min.js' }]
                ]);
            });
        });

        config.mode('stage', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [borschik, { source : '?.js', target :  '?.borschik.js', minify : false, freeze : false }],
                    [copyFile, { source : '?.borschik.js', target :  '?.min.js' }]
                ]);
            });
        });

        config.mode('production', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [borschik, { source : '?.js', target : '?.min.js', freeze : true }]
                ]);
            });
        });
    }

    function configureSets(platforms, sets) {
        platforms.forEach(function(platform) {
            sets.examples.configure({
                destPath : platform + '.examples',
                levels : getLibLevels(platform),
                techSuffixes : ['examples'],
                fileSuffixes : ['bemjson.js', 'title.txt'],
                inlineBemjson : true,
                processInlineBemjson : wrapInPage
            });

            sets.tests.configure({
                destPath : platform + '.tests',
                levels : getLibLevels(platform),
                techSuffixes : ['tests'],
                fileSuffixes : ['bemjson.js', 'title.txt']
            });

            sets.docs.configure({
                destPath : platform + '.docs',
                levels : getLibLevels(platform),
                exampleSets : [platform + '.examples'],
                langs : config.getLanguages(),
                jsdoc : { suffixes : ['vanilla.js', 'browser.js', 'node.js'] }
            });

            sets.specs.configure({
                destPath : platform + '.specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                jsSuffixes : ['vanilla.js', 'js', 'browser.js']
            });

            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                engines : {
                    'bemhtml-dev' : {
                        tech : 'enb-bemxjst/techs/bemhtml',
                        options : { devMode : true }
                    },
                    'bemhtml-prod' : {
                        tech : 'enb-bemxjst/techs/bemhtml',
                        options : { devMode : false }
                    }
                }
            });

            configurePlatformNodes(platform, [platform + '.tests/*/*', platform + '.examples/*/*']);
        });
    }

    function configureLevels(platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {
            var nodeDir = nodeConfig.getNodePath(),
                blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
                sublevelDir = path.join(nodeDir, 'blocks'),
                extendedLevels = [].concat(getTestLevels(platform));

            if(fs.existsSync(blockSublevelDir)) {
                extendedLevels.push(blockSublevelDir);
            }

            if(fs.existsSync(sublevelDir)) {
                extendedLevels.push(sublevelDir);
            }

            nodeConfig.addTech([techs.levels, { levels : extendedLevels }]);
        });
    }

    function configureServerSpecs(config) {
        config.configure({
            destPath : 'server.specs',
            sourceLevels : ['common.blocks', 'server.blocks', 'spec.blocks',
                { path : 'libs/bem-template-engines/common.blocks', check : false }
            ],
            levels : ['common.blocks', 'server.blocks'],
            jsSuffixes : ['vanilla.js', 'js', 'node.js'],
            specSuffixes : ['node.spec.js'],
            coverageFile : 'coverage.json'
        });
    }

};

function getLibLevels(platform) {
    return (PLATFORMS[platform] || SETS[platform]).map(function(level) {
        return level + '.blocks';
    });
}

function getSourceLevels(platform) {
    var platformNames = (PLATFORMS[platform] || SETS[platform] || SERVERS[platform]);
    var levels = [];

    // Libs levels
    platformNames.forEach(function(name) {
        if(name !== 'server') {
            levels.push(
                { path : path.join('libs', 'bem-core', name + '.blocks'), check : false },
                { path : path.join('libs', 'bem-components', name + '.blocks'), check : false },
                // { path : path.join('libs', 'bem-forms', name + '.blocks'), check : false },
                { path : path.join('libs', 'bem-grid', name + '.blocks'), check : false },
                { path : path.join('libs', 'bem-typography', name + '.blocks'), check : false }
            );
        }
    });

    levels.push({ path : path.join('libs', 'bem-template-engines', 'common.blocks'), check : false });

    // Service levels
    platformNames.forEach(function(name) {
        levels.push({ path : name + '.blocks', check : true });
    });

    // Design levels
    platformNames.forEach(function(name) {
        if(name !== 'server') {
            levels.push(
                { path : path.join('libs', 'bem-typography', 'design', name + '.blocks'), check : false },
                { path : path.join('design', name + '.blocks'), check : true }
            );
        }
    });

    return levels;
}

function getTestLevels(platform) {
    return [].concat(
        getSourceLevels(platform),
        'test.blocks'
    );
}

function getSpecLevels(platform) {
    return [].concat(
        { path : path.join('libs', 'bem-pr', 'spec.blocks'), check : false },
        getSourceLevels(platform)
    );
}

function getBrowsers(platform) {
    switch(platform) {
        case 'desktop':
            return [
                'last 2 versions',
                'ie 10',
                'ff 24',
                'opera 12.16'
            ];
        case 'touch':
            return [
                'android 4',
                'ios >= 5',
                'ie 10'
            ];
        case 'touch-pad':
            return [
                'android 4',
                'ios 5'
            ];
        case 'touch-phone':
            return [
                'android 4',
                'ios 6',
                'ie 10'
            ];
    }
}

function wrapInPage(bemjson, meta) {
    var basename = '_' + path.basename(meta.filename, '.bemjson.js');
    return {
        block : 'page',
        title : naming.stringify(meta.notation),
        head : [{ elem : 'css', url : basename + '.css' }],
        scripts : [{ elem : 'js', url : basename + '.js' }],
        mods : { theme : getThemeFromBemjson(bemjson) },
        content : bemjson
    };
}

function getThemeFromBemjson(bemjson) {
    if(typeof bemjson !== 'object') return;

    var theme, key;

    for(key in bemjson) {
        if(theme = key === 'mods'? bemjson.mods.theme :
                getThemeFromBemjson(bemjson[key])) return theme;
    }
}
