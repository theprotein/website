module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon@2x.png',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block: 'header'
        },
        {
            block: 'section',
            mods: { view: 'header' },
            content: {
                block: 'intro',
                content: [
                    'Your everyday working process and tools ',
                    { tag: 'br' },
                    'do not change but the profit you get ',
                    { tag: 'br' },
                    'change everything'
                ]
            }
        },
        {
            block: 'section',
            mods: { view: 'diet' },
            title: 'Protein Diet',
            desc: [
                'Protein is a simple but powerful SaaS service that is easily added ',
                'to your development diet'
            ],
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'workflow'
                                },
                                title: 'Workflow',
                                desc: [
                                    'Once the changes to a project were made, your ',
                                    'design or development team simply syncs them ',
                                    'with Protein by pressing the button. Once ',
                                    'pressed Protein pushes them as a new pull ',
                                    'request into a repository of the project, and they ',
                                    'appear in your ordinary working tool as a code or ',
                                    'a design sketch'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'team'
                                },
                                title: 'Team',
                                desc: [
                                    'Protein is a team product. It’s scientifically ',
                                    'proven that everyday use of Protein turns your ',
                                    'team’s working routine into incredible ',
                                    'productivity with no time waste on additional ',
                                    'synchronisations. It is great for designers, ',
                                    'frontend developers, testing engineers, UI/UX ',
                                    'engineers, managers'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'blue' } },
            content: [
                'We are inspired here at Protein and think that every tool the developer team uses ',
                { tag: 'br' },
                'should be compatible with Protein to empower the magic of one another'
            ]
        },
        {
            block: 'section',
            mix: { block: 'starter-kit' },
            title: 'Starter Kit',
            desc: [
                'We launch Protein as a Starter Kit ',
                'releasing integrations with other products you may use ',
                'as new features later on '
            ],
            content: [
                {
                    block: 'row',
                    mix: { block: 'starter-kit', elem: 'list' },
                    content: [
                        {
                            elem: 'col',
                            mods: {
                                mw: 4
                            },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'converting'
                                },
                                title: 'Converting',
                                desc: [
                                    'Protein Starter Kit converts ',
                                    'UI components that a designer ',
                                    'creates into a source code ',
                                    'to be used by a developer ',
                                    'and vice versa '
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                mw: 4
                            },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'syncing'
                                },
                                title: 'Syncing',
                                desc: [
                                    'Protein Starter Kit allows ',
                                    'syncing work a team ',
                                    'has done on the development ',
                                    'of the interfaces in the ',
                                    'background mode'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                mw: 4
                            },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'working'
                                },
                                title: 'Working',
                                desc: [
                                    'Protein Starter Kit works ',
                                    'through the cloud storage ',
                                    'with a web access to ',
                                    'the team management and ',
                                    'integrations’ settings'
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'technologies',
                    mix: { block: 'starter-kit', elem: 'technologies' },
                    title: 'Goes along well with',
                    content: [
                        {
                            block: 'row',
                            content: [
                                {
                                    elem: 'col',
                                    elemMods: {
                                        m: true
                                    },
                                    content: ''
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        m: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'html' }},
                                            text: 'HTML + CSS'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        m: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'osx' }},
                                            text: 'OS X'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        m: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'sketch' }},
                                            text: [
                                                'Sketch',
                                                {
                                                    elem: 'sup',
                                                    content: '3'
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        m: true
                                    },
                                    content: ''
                                }
                            ]
                        },
                        {
                            block: 'row',
                            content: [
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'react' }},
                                            text: 'React'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'angular' }},
                                            text: 'Angular'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'backbone' }},
                                            text: 'Backbone'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'bem' }},
                                            text: 'BEM'
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'sep'
        },
        {
            block: 'section',
            mix: { block: 'integrations' },
            title: 'Integrations',
            desc: [
                'We plan on extending Protein to any service you might use as integration',
                'and will be releasing them soon after Starter Kit release. It will work through the cloud ',
                'storage with a web access to team management and integrations’ settings'
            ],
            content: [
                {
                    block: 'technologies',
                    mix: { block: 'integrations', elem: 'technologies' },
                    title: 'Integrations available',
                    content: [
                        {
                            block: 'row',
                            content: [
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: 3
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'parse' }},
                                            text: 'Parse'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: 3
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'invision' }},
                                            text: 'Invision'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: 3
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'framerjs' }},
                                            text: 'FramerJS'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: 3
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'google-form' }},
                                            text: 'Google Form'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            block: 'row',
                            content: [
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: ''
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'pixate' }},
                                            text: 'Pixate'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'marvel' }},
                                            text: 'Marvel'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        mw: '3'
                                    },
                                    content: ''
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'hint',
                    mix: { block: 'integrations', elem: 'hint' },
                    content: [
                        'If you use any other tool than listed above, email it to us at ',
                        {
                            block: 'link',
                            mods: { theme: 'on-white' },
                            url: 'mailto:ask@theprotein.io',
                            content: 'ask@theprotein.io'
                        },
                        { tag: 'br' },
                        'and we try our best to release it as integration'
                    ]
                }
            ]
        },
        {
            block: 'sep'
        },
        {
            block: 'section',
            title: 'Features',
            desc: [
                'Apart from a Starter Kit version and integrations with other services ',
                'we plan on developing our core product with features ',
                'that soon will be available inside a Starter Kit'
            ],
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: { mw: 4 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'platforms'
                                },
                                title: 'Platforms',
                                desc: [
                                    'Compatibility with ',
                                    'Windows OS, iOS end Android OS ',
                                    'platforms to give your team ',
                                    'an option to provide layouts ',
                                    'as ready-to-go xml-schemas ',
                                    'of the interface and more'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 4 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'live-preview'
                                },
                                title: 'Live preview',
                                desc: [
                                    'Ability to live preview ',
                                    'your components to help ',
                                    'the team understand how ',
                                    'it works while they work on ',
                                    'it’s creation. Available across ',
                                    'browsers and devices'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 4 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'conversions'
                                },
                                title: 'Conversions',
                                desc: [
                                    'Possibility to convert ',
                                    'not only separate components ',
                                    'your team is working on ',
                                    'but full screens to help ',
                                    'a layout become ',
                                    'an application right awa'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'sep'
        },
        {
            block: 'section',
            title: 'Workflow',
            desc: [
                'Protein is easily installed into existing design and development workflow as a communication tool ',
                'that team uses to exchange their designs and UI components. ',
                'It requires no additional knowledge or change of tools the team already use '
            ],
            content: [
                {
                    block: 'icon',
                    attrs: { style: 'margin:auto;width:228px;display:block;'},
                    mods: { inline: true },
                    path: 'pw'
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'green' } },
            content: [
                'Protein helps your team speak one language and use one library instead of multiple copies and designs. ',
                { tag: 'br' },
                'With Protein your team develops the core product faster with no efforts wasted on the go'
            ]
        },
        {
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'green' } },
            content: [
                'Protein helps your team speak one language and use one library instead of multiple copies and designs ',
                { tag: 'br' },
                'and develop the core product faster with no efforts wasted on the go '
            ]
        },
        {
            block: 'section',
            mods: { view: 'helps' },
            title: 'Protein helps your team',
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            elemMods: { mw: 6 },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/1.svg'},
                                text: [
                                    'Edit live UI components in an editor',
                                    'of your choice'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            elemMods: { mw: 6 },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/2.svg'},
                                text: [
                                    'Share libraries and layouts you create ',
                                    'with other designers'
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            elemMods: { mw: 6 },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/3.svg'},
                                text: [
                                    'Build and structurie them',
                                    'with live preview'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            elemMods: { mw: 6 },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/4.svg'},
                                text: [
                                    'Link live UI components to the all project ',
                                    'layouts you have'
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            elemMods: { mw: 6 },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/5.svg'},
                                text: [
                                    'Sync them with code implementation',
                                    'in the background'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            elemMods: { mw: 6 },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/6.svg'},
                                text: [
                                    'Get design changes by pull requests by ',
                                    'just pressing a hotkey not as layouts but ',
                                    'as code you can work with'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mods: { view: 'dates' },
            title: 'Delivery Dates',
            desc: [
                'Protein will go live on Easter 2016 as a Starter Kit version ',
                'with integrations’ releases as fast as possible'
            ],
            content: [
                {
                    block: 'icon',
                    attrs: { style: 'width:1000px'},
                    mods: { inline: true },
                    path: 'dates'
                }
            ]
        },
        {
            block: 'section',
            title: 'Pricing',
            desc: [
                'We scheduled Protein Starter Kit launch for May 2016. ',
                'However, you can support the team and the product ',
                'and pre-order some Protein for Christmas with a festive reduction'
            ],
            content: [
                {
                    block: 'pricing',
                    content: [
                        {
                            block: 'row',
                            mix: { block: 'pricing', elem: 'list' },
                            content: [
                                {
                                    elem: 'col',
                                    mods: { mw: 2 }
                                },
                                {
                                    elem: 'col',
                                    mods: { mw: 4 },
                                    content: {
                                        block: 'price',
                                        mods: { theme: 'early' },
                                        title: 'Early bird price',
                                        val: '99'
                                    }
                                },
                                {
                                    elem: 'col',
                                    mods: { mw: 4 },
                                    content: {
                                        block: 'price',
                                        title: 'After release price',
                                        val: '149'
                                    }
                                },
                                {
                                    elem: 'col',
                                    mods: { mw: 2 }
                                }
                            ]
                        },
                        {
                            block: 'hint',
                            mix: { block: 'pricing', elem: 'hint' },
                            content: [
                                'Pre-order price (Early bird) includes a full version of Protein Starter Kit with features available at release date'
                            ]
                        },
                        {
                            elem: 'text',
                            content: [
                                'If you are interested in custom settings or an enterprise version  of the product, ',
                                'please, drop us a line at ',
                                {
                                    block: 'link',
                                    mods: { theme: 'on-white' },
                                    url: 'mailto: ask@theprotein.io',
                                    content: 'ask@theprotein.io'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'pre-order' },
            title: 'Protein Pre-order',
            desc: [
                'Protein Pre-order starts on Christmas 2015 as an early bird mode ',
                'where you can buy Protein Starter Kit with a Christmas price reduction ',
                'and show the community support during the development process'
            ],
            content: [
                {
                    block: 'pre-order',
                    elem: 'content',
                    content: [
                        {
                            block: 'button',
                            mix: { block: 'pre-order', elem: 'button' },
                            mods: { type: 'link', theme: 'fill' },
                            url: 'http://eepurl.com/boJcIH',
                            text: 'Subscribe'
                        },
                        {
                            block: 'hint',
                            mix: { block: 'pre-order', elem: 'hint' },
                            content: [
                                '<b>Important!</b> Since we launch a limited number of pre-ordered licenses which you get discounted, ',
                                'we advise you to hit Subscribe button to subscribe to the pre-order start. ',
                                'If you do so, we will email you a link to get your Christmas Protein  even cheaper!'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            title: 'Meet the Team',
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: { mw: 4 },
                            content: {
                                block: 'people',
                                image: 'i/people/awinogradov.png',
                                name: 'Anton Winogradov',
                                nickname: 'awinogradov',
                                post: 'CEO'
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 4 },
                            content: {
                                block: 'people',
                                image: 'i/people/yaroshevich.png',
                                name: 'Alexej Yaroshevich',
                                nickname: 'yaroshevich',
                                post: 'VP Engineering'
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 4 },
                            content: {
                                block: 'people',
                                image: 'i/people/voischev.png',
                                name: 'Ivan Voischev',
                                nickname: 'voischev',
                                post: 'VP Frontend Development'
                            }
                        }
                    ]
                },
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: { m: true },
                            content: ''
                        },
                        {
                            elem: 'col',
                            mods: { m: true },
                            content: {
                                block: 'people',
                                image: 'i/people/mursya.png',
                                name: 'Elena Jetpyspaeva',
                                nickname: 'mursya',
                                post: 'VP Business Development'
                            }
                        },
                        {
                            elem: 'col',
                            mods: { m: true },
                            content: {
                                block: 'people',
                                image: 'i/people/squorax.png',
                                name: 'Vladimir Stegantsov',
                                nickname: 'squorax',
                                post: 'Lead Designer'
                            }
                        },
                        {
                            elem: 'col',
                            mods: { m: true },
                            content: ''
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer'
        }
    ]
};
