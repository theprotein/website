const fs = require('fs');
const path = require('path');
const bem = require('enb-bem-techs');
const borschik = require('enb-borschik/techs/borschik');

const projectLevels = [
    { path: path.join('bower_components', 'bem-core', 'common.blocks'), check: false },
    { path: path.join('bower_components', 'bem-core', 'desktop.blocks'), check: false },
    { path: path.join('bower_components', 'bem-components', 'common.blocks'), check: false },
    { path: path.join('bower_components', 'bem-components', 'desktop.blocks'), check: false },
    { path: path.join('bower_components', 'bem-grid', 'common.blocks'), check: false },
    { path: path.join('bower_components', 'bem-stat-counters', 'common.blocks'), check: false },
    { path: 'common.blocks', check: true }
];

module.exports = function(project) {
    project.node('public/index', function(node) {
        node.addTech(
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }]
        );

        const nodeUrl = node.getPath();
        const nodeDirname = node.getNodePath();
        const sublevels = [
            path.join(nodeDirname, '..', '.blocks'),
            path.join(nodeDirname, 'blocks')
        ].filter(level => fs.existsSync(level));
        const levels = [].concat(projectLevels, sublevels);

        node.addTechs([
            [bem.levels, { levels }],
            [bem.bemjsonToBemdecl, { target: '.tmp.bemdecl.js' }],
            [bem.deps, {
                target: '.tmp.deps.js',
                bemdeclFile: '.tmp.bemdecl.js'
            }],
            [bem.files, { depsFile: '.tmp.deps.js' }],

            [require('enb-postcss/techs/enb-postcss'), {
                sourceSuffixes: ['css', 'post.css'],
                target: '.tmp.css',
                sourcemap: true,
                plugins: [
                    require('postcss-import'),
                    require('postcss-mixins'),
                    require('postcss-for'),
                    require('postcss-simple-vars')({
                        variables: {
                            gridMaxWidth: '1000px',
                            gridGutter: '0px',
                            gridFlex: 'flex'
                        }
                    }),
                    require('lost'),
                    require('postcss-cssnext'),
                    require('postcss-custom-properties'),
                    require('postcss-nested'),
                    require('postcss-url')({ url: 'rebase' }),
                    require('postcss-font-magician')(),
                    require('postcss-browser-reporter'),
                    require('postcss-reporter')
                ]
            }],

            [require('enb-js/techs/browser-js'), {
                target: '.tmp.browser.js',
                sourceSuffixes: ['vanilla.js', 'js', 'browser.js']
            }],
            [require('enb/techs/file-merge'), {
                target: '.tmp.pre.js',
                sources: ['.tmp.bemhtml.js', '.tmp.browser.js']
            }],
            [require('enb-modules/techs/prepend-modules'), {
                source: '.tmp.pre.js',
                target: '.tmp.js'
            }]
        ]);

        node.addTechs([
            [require('enb-bemxjst/techs/bemhtml'), { target: '.tmp.bemhtml.js' }],
            [require('enb-bemxjst/techs/bemjson-to-html'), {
                target: '?.html',
                bemhtmlFile: '.tmp.bemhtml.js'
            }]
        ]);

        node.addTargets([ '?.min.css', '?.min.js', '?.html' ]);

        node.mode('development', function() {
            node.addTechs([
                [borschik, {
                    source: '.tmp.css',
                    target: '?.min.css',
                    freeze: true,
                    minify: false
                }],
                [require('enb/techs/file-copy'), {
                    source: '.tmp.js',
                    target: '?.min.js'
                }]
            ]);
        });

        node.mode('production', function() {
            node.addTechs([
                [borschik, {
                    source: '.tmp.css',
                    target: '?.min.css',
                    minify: true
                }],
                [borschik, {
                    source: '.tmp.js',
                    target: '?.min.js'
                }]
            ]);
        });
    });
};
