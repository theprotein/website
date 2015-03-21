module.exports = function(bh) {
    bh.match('protein', function(ctx, json) {
        ctx.content([
            {
                block : 'promo',
                content : [
                    {
                        block : 'row',
                        content : [
                            {
                                block : 'feature',
                                content : [
                                    {
                                        elem : 'icon',
                                        content : [
                                            {
                                                block : 'icon',
                                                mods : { theme : 'proto', size : 'xl', feature : 'components' }
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'title',
                                        content : 'Live components'
                                    }
                                ]
                            },
                            {
                                block : 'feature',
                                content : [
                                    {
                                        elem : 'icon',
                                        content : [
                                            {
                                                block : 'icon',
                                                mods : { theme : 'proto', size : 'xl', feature : 'prototype' }
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'title',
                                        content : 'Live interfaces'
                                    }
                                ]
                            },
                            {
                                block : 'feature',
                                content : [
                                    {
                                        elem : 'icon',
                                        content : [
                                            {
                                                block : 'icon',
                                                mods : { theme : 'proto', size : 'xl', feature : 'guidelines' }
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'title',
                                        content : 'Live guidelines'
                                    }
                                ]
                            },
                            {
                                block : 'feature',
                                content : [
                                    {
                                        elem : 'icon',
                                        content : [
                                            {
                                                block : 'icon',
                                                mods : { theme : 'proto', size : 'xl', feature : 'user-flow' }
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'title',
                                        content : 'Live user flow'
                                    }
                                ]
                            },
                            {
                                block : 'feature',
                                content : [
                                    {
                                        elem : 'icon',
                                        content : [
                                            {
                                                block : 'icon',
                                                mods : { theme : 'proto', size : 'xl', feature : 'integrations' }
                                            }
                                        ]
                                    },
                                    {
                                        elem : 'title',
                                        content : 'Awesome integrations'
                                    }
                                ]
                            }
                        ].map(function(item) {
                            return {
                                elem : 'col',
                                mods : { s : true },
                                content : item
                            };
                        })
                    }
                ]
            },
            {
                block : 'promo',
                content : [
                    {
                        elem : 'heading',
                        content : [
                            {
                                block : 'heading',
                                lvl : 2,
                                content : 'Live products for your customers and your soul'
                            }
                        ]
                    },
                    {
                        elem : 'actions',
                        content : [
                            {
                                block : 'button',
                                mods : { theme : 'proto', size : 'xl', type : 'link' },
                                url : '#',
                                text : 'Be founding member #1124'
                            }
                        ]
                    }
                ]
            },
            {
                block : 'promo',
                content : [
                    {
                        elem : 'heading',
                        content : [
                            {
                                block : 'heading',
                                lvl : 2,
                                content : 'Create live components easily'
                            }
                        ]
                    },
                    {
                        elem : 'description',
                        content : [
                            {
                                block : 'paragraph',
                                mods : { type : 'lead' },
                                content : [
                                    'You can create components in your favorite technologies ',
                                    'and sync with your existed components.<br>',
                                    'Edit your components with live preview, convenient specifications ',
                                    'and live content.'
                                ]
                            },
                            {
                                block : 'paragraph',
                                content : [
                                    'Each component release in a number of technologies, ',
                                    'each of which can be replaced by a suitable specifically for you: ',
                                    '<b>interactions</b>, <b>template</b>, <b>style</b>, <b>test</b>, <b>doc</b>.<br>',
                                    'Protein support: <b>JSX</b>, <b>BH</b>, <b>Handlebars</b> and <b>SVG</b> as templates; ',
                                    '<b>React</b>, <b>ES6</b> and <b>i-bem.js</b> ',
                                    'as interactions; <b>LESS</b>, <b>Sass</b> and <b>Stylus</b> as styles;<br>',
                                    '<b>Markdown</b> as docs; <b>Mocha</b>, <b>Jasmine</b>, <b>Karma</b> and <b>Istanbul</b> as test engines;'
                                ]
                            },
                            {
                                block : 'paragraph',
                                content : [
                                    'Also Protein work with <b>Autoprefixer</b>, <b>Autopolyfiller</b> and <b>PostCSS</b> for your<br>',
                                    'incredible productivity every day.'
                                ]
                            }
                        ]
                    },
                    {
                        elem : 'actions',
                        content : [
                            {
                                block : 'yes-you-can',
                                control : [
                                    {
                                        block : 'button',
                                        mods : { theme : 'example', size : 'xl', type : 'link' },
                                        url : '#',
                                        text : 'Hey designer!'
                                    }
                                ],
                                settings : [
                                    {
                                        block : 'button',
                                        mods : { theme : 'example', size : 's', type : 'link', mode : 'icon' },
                                        url : '#',
                                        text : '+'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                block : 'promo',
                content : [
                    {
                        elem : 'heading',
                        content : [
                            {
                                block : 'heading',
                                lvl : 2,
                                content : 'Use your components in UI builder'
                            }
                        ]
                    },
                    {
                        elem : 'description',
                        content : [
                            {
                                block : 'paragraph',
                                mods : { type : 'lead' },
                                content : [
                                    'UI builder uses the methodology of the grid interface. ',
                                    'Each component has a strict order, <br>',
                                    'but are completely independent of each other.'
                                ]
                            },
                            {
                                block : 'paragraph',
                                content : [
                                    'Developement of interfaces using drag and drop has nothing to do with reality. ',
                                    'In this way, the designers used to build mockups. <br> ',
                                    'Protein is based on a different, more progressive concept that allows for the design of a markup language <br>',
                                    'and edit components familiar to designers fashion. '
                                ]
                            },
                            {
                                block : 'paragraph',
                                content : [
                                    'Awesome interface can be constructed differently.'
                                ]
                            }
                        ]
                    },
                    {
                        elem : 'actions',
                        content : [
                            {
                                block : 'image',
                                url : 'image/_feature/image_feature_prototype.png'
                            }
                        ]
                    },
                    {
                        block : 'paragraph',
                        content : [
                            'If you think that the editor is not enough to build ',
                            'the functional interface. Although it is unlikely, ',
                            'of course, we tried very hard. <br> ',
                            'You can always edit the code in your favorite editor, by synchronizing ',
                            'with the repository on GitHub.'
                        ]
                    }
                ]
            },
            {
                block : 'promo',
                content : [
                    {
                        elem : 'heading',
                        content : [
                            {
                                block : 'heading',
                                lvl : 2,
                                content : 'Integrate projects with external services'
                            }
                        ]
                    },
                    {
                        elem : 'actions',
                        content : [

                        ]
                    }
                ]
            }
        ]);
    });
};
