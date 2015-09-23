module.exports = {
    block: 'page',
    title: 'Protein - Front-end development workflow',
    favicon: '/favicon@2x.png',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },

        {
            block: 'social-meta',
            title: 'Protein - Front-end development workflow',
            description: 'Protein - Front-end development workflow',
            type: 'product',
            url: 'http://theprotein.io',
            image: 'http://theprotein.io/favicon@2x.png',
            twitter: '@protein_io'
        },

        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header'
        },
        {
            block: 'section',
            mods: { view: 'header' },
            content: {
                block: 'intro',
                content: [
                    'Your everyday working process and tools do not change ',
                    { block: 'br' },
                    'but the profit you get change everything'
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
                            mods: { sw: 12, mw: 6 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'workflow'
                                },
                                title: 'Workflow',
                                desc: [
                                    'Simple. Once changes are made you press [cmd] + P ',
                                    'to sync it, and they appear in your working tool ',
                                    ' as a code or a design sketch.'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: { sw: 12, mw: 6 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'team'
                                },
                                title: 'Team',
                                desc: [
                                    'As a team product it is great for designers, ',
                                    'frontend developers, testing engineers, UI/UX ',
                                    'engineers, managers.'
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
                'Protein requires no additional knowledge or change ',
                { block: 'br' },
                'of tools the team already use'
            ]
        },
        {
            block: 'section',
            attrs: { id: 'starter-kit' },
            mix: { block: 'starter-kit' },
            title: 'Starter Kit',
            desc: [
                'We launch Protein as a Starter Kit releasing integrations with other products ',
                'you may use as new features later on'
            ],
            content: [
                {
                    block: 'row',
                    mix: { block: 'starter-kit', elem: 'list' },
                    content: [
                        {
                            elem: 'col',
                            mods: {
                                sw:12,
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
                                    'UI components\' designs ',
                                    'into a source code ',
                                    'and vice versa',
                                    'regardless of the platform '
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw:12,
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
                                sw:12,
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
                    content: [
                        {
                            block: 'row',
                            content: [
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://bohemiancoding.com/sketch/',
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
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://www.adobe.com/ru/products/illustrator.html',
                                            icon: { block: 'icon', mods: { technology: 'illustrator' }},
                                            text: 'Illustrator'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://facebook.github.io/react/',
                                            icon: { block: 'icon', mods: { technology: 'react' }},
                                            text: 'React'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'https://angularjs.org',
                                            icon: { block: 'icon', mods: { technology: 'angular' }},
                                            text: 'Angular'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://bem.info',
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
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'green' } },
            content: [
                'We are inspired here at Protein and think that every tool the developer team uses ',
                { block: 'br' },
                'should be compatible with Protein to empower the magic of one another'
            ]
        },
        {
            block: 'section',
            mix: { block: 'integrations' },
            title: 'Integrations',
            desc: [
                'We extend Protein to any service you might use as integration',
                'available after Starter Kit release'
            ],
            content: [
                {
                    block: 'technologies',
                    mix: { block: 'integrations', elem: 'technologies' },
                    content: [
                        {
                            block: 'row',
                            content: [
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'https://www.parse.com',
                                            icon: { block: 'icon', mods: { technology: 'parse' }},
                                            text: 'Parse'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://www.invisionapp.com',
                                            icon: { block: 'icon', mods: { technology: 'invision' }},
                                            text: 'Invision'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://framerjs.com',
                                            icon: { block: 'icon', mods: { technology: 'framerjs' }},
                                            text: 'FramerJS'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://www.google.com/intl/ru/forms/about/',
                                            icon: { block: 'icon', mods: { technology: 'google-form' }},
                                            text: 'Google Form'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://www.pixate.com',
                                            icon: { block: 'icon', mods: { technology: 'pixate' }},
                                            text: 'Pixate'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        s: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'https://marvelapp.com',
                                            icon: { block: 'icon', mods: { technology: 'marvel' }},
                                            text: 'Marvel'
                                        }
                                    }
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
                        ' ',
                        { block: 'br' },
                        'and we try our best to release it as integration'
                    ]
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'green' } },
            content: [
                'It’s scientifically proven that everyday use of Protein turns ',
                { block: 'br' },
                'your team’s working routine into incredible productivity ',
                { block: 'br' },
                'with no time waste on additional synchronisations'
            ]
        },
        {
            block: 'section',
            attrs: { id: 'features' },
            mix: { block: 'features' },
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
                            mods: {
                                sw: 12,
                                mw: 4
                            },
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
                            mods: {
                                sw: 12,
                                mw: 4
                            },
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
                            mods: {
                                sw: 12,
                                mw: 4
                            },
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
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'green' } },
            content: [
                'Protein helps your team speak one language and use one library ',
                { block: 'br' },
                'instead of multiple copies and designs'
            ]
        },
        {
            block: 'section',
            mix: { block: 'workflow' },
            title: 'Workflow',
            desc: [
                'Protein is easily installed into existing design and development workflow as a communication tool ',
                'that team uses to exchange their designs and UI components. ',
                'It requires no additional knowledge or change of tools the team already use '
            ],
            content: [
                {
                    block: 'workflow-scheme',
                    mix: { block: 'workflow', elem: 'scheme' }
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'green' } },
            content: [
                'With Protein your team develops the core product faster ',
                { block: 'br' },
                'with no efforts wasted on the go'
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
                            elemMods: {
                                sw: 12,
                                mw: 6
                            },
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
                            elemMods: {
                                sw: 12,
                                mw: 6
                            },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/2.svg'},
                                text: [
                                    'Share libraries and layouts you create ',
                                    'with other designers'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            elemMods: {
                                sw: 12,
                                mw: 6
                            },
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
                            elemMods: {
                                sw: 12,
                                mw: 6
                            },
                            content: {
                                block: 'info',
                                icon: { block: 'image', url: 'i/helps/4.svg'},
                                text: [
                                    'Link live UI components to the all project ',
                                    'layouts you have'
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            elemMods: {
                                sw: 12,
                                mw: 6
                            },
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
                            elemMods: {
                                sw: 12,
                                mw: 6
                            },
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
            attrs: { id: 'dates' },
            mix: { block: 'dates' },
            title: 'Delivery Dates',
            desc: [
                'Protein will go live on Spring 2016 as a Starter Kit version ',
                'with integrations’ releases as fast as possible'
            ],
            content: [
                {
                    block: 'icon',
                    mix: { block: 'dates', elem: 'image' },
                    mods: { inline: true },
                    path: 'dates'
                }
            ]
        },
        {
            block: 'section',
            attrs: { id: 'pricing' },
            mix: { block: 'pricing' },
            title: 'Pricing',
            desc: [
                'Protein Starter Kit will be launched in Spring 2016 on an annual subscription basis.',
                'All released integrations and features after the Starter Kit release',
                'will be shipped as updates of the core product.'
            ],
            content: [
                {
                    block: 'row',
                    mix: { block: 'pricing', elem: 'list' },
                    content: [
                        {
                            elem: 'col',
                            mods: {
                                sw: 0,
                                mw: 0,
                                lw: 2
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: 6,
                                mw: 6,
                                lw: 4
                            },
                            content: {
                                block: 'price',
                                mods: { theme: 'early' },
                                title: 'Early bird price',
                                val: '99'
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: 6,
                                mw: 6,
                                lw: 4
                            },
                            content: {
                                block: 'price',
                                title: 'After release price',
                                val: '149'
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: 0,
                                mw: 0,
                                lw: 2
                            }
                        }
                    ]
                },
                {
                    block: 'hint',
                    mix: { block: 'pricing', elem: 'hint' },
                    content: [
                        'If you are interested in custom settings or an enterprise version  of the product, ',
                        { block: 'br' },
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
        },
        {
            block: 'section',
            mix: { block: 'pre-order' },
            title: 'Pre-order',
            desc: [
                'Pre-order starts on Christmas in an early bird mode with a limited number of licenses ',
                'which you get discounted if you subscribe to pre-order\'s start ',
            ],
            content: [
                {
                    block: 'pre-order',
                    elem: 'content',
                    content: [
                        {
                            block: 'button',
                            mix: { block: 'pre-order', elem: 'button' },
                            mods: { type: 'link', size: 'l' },
                            url: 'http://eepurl.com/boJcIH',
                            text: 'Subscribe'
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
                            mods: {
                                sw: 6,
                                mw: 4
                            },
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
                            mods: {
                                sw: 6,
                                mw: 4
                            },
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
                            mods: {
                                sw: 12,
                                mw: 4
                            },
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
                            mods: {
                                mw: 0,
                                l: true
                            },
                            content: ''
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: 6,
                                m: true
                            },
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
                            mods: {
                                sw: 6,
                                m: true
                            },
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
                            mods: {
                                mw: 0,
                                l: true
                            },
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
