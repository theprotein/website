({
    block : 'page',
    mods : { theme : 'proto' },
    title : 'Protein - Front-end development workflow',
    styles : [
        { elem : 'css', url : '_index.css' },
        { elem : 'css', url : '//fonts.googleapis.com/css?family=Arvo:700' },
        { elem : 'css', url : '//fonts.googleapis.com/css?family=Roboto:400,100,300,500' }
    ],
    scripts : [
        { elem : 'js', url : '_index.js' },
    ],
    content : [
        {
            block : 'google-analytics',
            params : {
                id :  'UA-63201396-1'
            }
        },
        {
            block : 'header',
            mix : { block : 'page', elem : 'header' },
            content : [
                {
                    block : 'logo',
                    mods : {
                        theme : 'proto',
                        view : 'full',
                        mode : 'default',
                        size : 'xl'
                    }
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'promo',
                    mix : { block : 'features' },
                    content : [
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { m : true, sw : 6 },
                                    content : [
                                        {
                                            block : 'feature',
                                            content : [
                                                {
                                                    elem : 'icon',
                                                    content : [
                                                        {
                                                            block : 'icon',
                                                            mods : {
                                                                theme : 'proto',
                                                                size : 'xl',
                                                                feature : 'components'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem : 'title',
                                                    content : 'Live components'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { m : true, sw : 6 },
                                    content : [
                                        {
                                            block : 'feature',
                                            content : [
                                                {
                                                    elem : 'icon',
                                                    content : [
                                                        {
                                                            block : 'icon',
                                                            mods : {
                                                                theme : 'proto',
                                                                size : 'xl',
                                                                feature : 'prototype'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem : 'title',
                                                    content : 'Scalable interfaces'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { m : true, sw : 6 },
                                    content : [
                                        {
                                            block : 'feature',
                                            content : [
                                                {
                                                    elem : 'icon',
                                                    content : [
                                                        {
                                                            block : 'icon',
                                                            mods : {
                                                                theme : 'proto',
                                                                size : 'xl',
                                                                feature : 'guidelines'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem : 'title',
                                                    content : 'Favorite instruments'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { m : true, sw : 12 },
                                    content : [
                                        {
                                            block : 'feature',
                                            content : [
                                                {
                                                    elem : 'icon',
                                                    content : [
                                                        {
                                                            block : 'icon',
                                                            mods : {
                                                                theme : 'proto',
                                                                size : 'xl',
                                                                feature : 'integrations'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem : 'title',
                                                    content : 'Awesome integrations'
                                                }
                                            ]
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
                                    mods : { theme : 'proto' },
                                    lvl : 2,
                                    content : 'Use UI components in graphic editors'
                                }
                            ]
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { type : 'lead', theme : 'proto' },
                                    content : [
                                        'Protein is simple service for incredible productivity every day. <br>',
                                        'It\'s like Dropbox for your UI components.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Protein sync changes from Sketch and sources in the repositories. All new changes from editors <br>',
                                        'will be pushed to repository and then Protein will create new pull request<br>',
                                        'for your front-end developers.',
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Protein can build vector implementation of your components in the background. Without pain and double work.<br>',
                                        'It\'s absolutely fast and intergated with your repositories of sources.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'actions',
                            content : [
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'sketch',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'Sketch'
                                        }
                                    ]
                                },
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'github',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'GitHub'
                                        }
                                    ]
                                },
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'bitbacket',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'BitBucket'
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
                                    mods : { theme : 'proto' },
                                    lvl : 2,
                                    content : 'Integrate components with external services'
                                }
                            ]
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { type : 'lead', theme : 'proto' },
                                    content : [
                                        'We know how important it is to have the opportunity ',
                                        'to work with your favorite tools <br> and do not seek to replace them.<br>',
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'We thought that you would be very nice to be able to interact ',
                                        'with them from the Protein.<br>',
                                        'And also get the ability to integrate with services that ',
                                        'are unavailable<br>',
                                        'to you earlier from a familiar environment.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'actions',
                            content : [
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'travis',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'Travis CI'
                                        }
                                    ]
                                },
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'code-climate',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'Code Climate'
                                        }
                                    ]
                                },
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'dropbox',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'Dropbox'
                                        }
                                    ]
                                },
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'framer',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'FramerJS'
                                        }
                                    ]
                                },
                                {
                                    block : 'integration',
                                    content : [
                                        {
                                            block : 'icon',
                                            mix : { block : 'integration', elem : 'icon' },
                                            mods : {
                                                theme : 'proto',
                                                service : 'parse',
                                                size : 'l'
                                            }
                                        },
                                        {
                                            elem : 'title',
                                            content : 'Parse'
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
                                    mods : { theme : 'proto' },
                                    lvl : 2,
                                    content : 'Supported techs for magic'
                                }
                            ]
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { type : 'lead', theme : 'proto' },
                                    content : [
                                        'You can create components in your favorite technologies.',
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Each component can be build with a number of technologies, and every technology <br>',
                                        'can be replaced: interactions, templates, styles, tests, docs.<br>',
                                        'Protein support: JSX, BH, BEMHTML as templates; ',
                                        'React, ES6 and i-bem.js ',
                                        'as interactions; <br> LESS, Sass and Stylus as preprocessors;<br>',
                                        'Markdown as docs; Mocha, Jasmine, Karma and Istanbul as test engines;'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Also Protein work with Autoprefixer, Autopolyfiller and PostCSS.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'promo',
                    mods : { view : 'color' },
                    js : true,
                    content : [
                        {
                            elem : 'heading',
                            content : [
                                {
                                    block : 'heading',
                                    mods : { theme : 'proto' },
                                    lvl : 2,
                                    content : ' Pre-order starts early fall of 2015'
                                }
                            ]
                        },
                        {
                            elem : 'description',
                            content : [
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Since we launch a limited number of pre-ordered licenses, <br>',
                                        'subscribe to pre-order start and get a chance to pre-order first!'
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'actions',
                            content : [
                                {
                                    block : 'button',
                                    mods : {
                                        theme : 'proto',
                                        view : 'action',
                                        size : 'xl',
                                        type : 'link'
                                    },
                                    target : '_blank',
                                    url : 'http://eepurl.com/boJcIH',
                                    text : 'Subscribe'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'footer',
            mix : { block : 'page', elem : 'footer' },
            content :  [
                {
                    block : 'logo',
                    mods : { theme : 'proto', size : 'm' },
                },
                {
                    block : 'social-links',
                    content : [
                        {
                            block : 'link',
                            mix : { block : 'social-links', elem : 'link' },
                            target : '_blank',
                            url : '//facebook.com/proteinio',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { theme : 'proto', social : 'facebook', size : 's' }
                                }
                            ]
                        },
                        {
                            block : 'link',
                            mix : { block : 'social-links', elem : 'link' },
                            target : '_blank',
                            url : '//twitter.com/protein_io',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { theme : 'proto', social : 'twitter', size : 's' }
                                }
                            ]
                        },
                        {
                            block : 'link',
                            mix : { block : 'social-links', elem : 'link' },
                            target : '_blank',
                            url : '//github.com/theprotein',
                            content : [
                                {
                                    block : 'icon',
                                    mods : { theme : 'proto', social : 'github', size : 's' }
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'love',
                    content : [
                        'Made with ',
                        {
                            elem : 'heart',
                            tag : 'span',
                            content : '❤'
                        },
                        ' in Moscow'
                    ]
                },
                {
                    block : 'copyright',
                    content : 'Copyright © The Protein Corp., 2015'
                }
            ]
        }
    ]
})
