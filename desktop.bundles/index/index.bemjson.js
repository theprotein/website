({
    block : 'page',
    mods : { theme : 'proto' },
    title : 'Protein - Front end development workflow',
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
            block: 'google-analytics',
            params: {
                id: 'UA-63201396-1'
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
                                    content : 'Use UI components in graphical editors'
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
                                        'Protein is service for incredible productivity every day. <br>',
                                        'It\'s like Dropbox for your components.'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Protein sync changes from <b>Sketch</b>, <b>AI</b> and sources updates in the repository. All new changes from editors <br>',
                                        'will be pushed to repository and then Protein will create new pull request<br>',
                                        'for your front end developers.',
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Protein can build vector implementation of your components in the background. <br>',
                                        'Absolutly fast and intergated with your code repositories.'
                                    ]
                                }
                            ]
                        },
                        {
                            elem : 'actions',
                            content : [
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'sketch',
                                        size : 'l'
                                    }
                                },
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'github',
                                        size : 'l'
                                    }
                                },
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'bitbacket',
                                        size : 'l'
                                    }
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
                                    content : 'Integrate projects with external services'
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
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'travis',
                                        size : 'l'
                                    }
                                },
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'code-climate',
                                        size : 'l'
                                    }
                                },
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'dropbox',
                                        size : 'l'
                                    }
                                },
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'framer',
                                        size : 'l'
                                    }
                                },
                                {
                                    block : 'icon',
                                    mix : { block : 'promo', elem : 'icon' },
                                    mods : {
                                        theme : 'proto',
                                        service : 'parse',
                                        size : 'l'
                                    }
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
                                        'Each component can be build with a number of technologies, <br>',
                                        'each of which can be replaced by a suitable specifically for you: ',
                                        '<b>interactions</b>, <b>template</b>, <b>style</b>, <b>test</b>, <b>doc</b>.<br>',
                                        'Protein support: <b>JSX</b>, <b>BH</b>, <b>BEMHTML</b> as templates; ',
                                        '<b>React</b>, <b>ES6</b> and <b>i-bem.js</b> ',
                                        'as interactions; <b>LESS</b>, <b>Sass</b> and <b>Stylus</b> as preprocessors;<br>',
                                        '<b>Markdown</b> as docs; <b>Mocha</b>, <b>Jasmine</b>, <b>Karma</b> and <b>Istanbul</b> as test engines;'
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    mods : { theme : 'proto' },
                                    content : [
                                        'Also Protein work with <b>Autoprefixer</b>, <b>Autopolyfiller</b> and <b>PostCSS</b>.'
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
                                    content : 'Protein will open in the autumn of 2015'
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
                                        'We work hard on Protein beta version and you can will be one of ',
                                        'firstly happiness users.<br>',
                                        'Now you can sign up to get news about Protein.'
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
            mix : { block : 'page', elem : 'footer' }
        }
    ]
})
