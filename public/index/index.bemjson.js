module.exports = {
    block: 'page',
    title: 'Protein - UI components syncing',
    favicon: '/favicon@2x.png',
    doctype: [
        '<!DOCTYPE html>',
        '<!-- © The Protein Corp. All rights reserved. | http://theprotein.io -->'
    ],
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },

        {
            block: 'social-meta',
            title: 'Protein - UI components syncing',
            description: 'Service to sync UI between technologies in your team. Seamless integration into the workflow of any technology stack and a set of tools. Instant delivery changes from design tools to the source code and vice versa. A revolutionary approach to the design and development of interfaces.',
            type: 'product',
            url: 'http://theprotein.io',
            image: 'http://theprotein.io/p_share_square.png',
            twitterImage: 'http://theprotein.io/p_share_twitter.png',
            twitter: '@protein_io'
        },

        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'header',
            mods: { visible: true }
        },
        {
            block: 'section',
            mods: { view: 'header' },
            content: {
                block: 'intro',
                content: [
                    'Your everyday working ',
                    { block: 'mark', mods: { theme: 'g' }, content: 'process and tools do&nbsp;not change' },
                    { block: 'br' },
                    'but the profit you get ',
                    { block: 'mark', mods: { theme: 'o' }, content: 'change everything' },
                ]
            }
        },
        {
            block: 'section',
            mods: { view: 'diet' },
            title: 'Protein Diet',
            desc: [
                'Protein is&nbsp;a&nbsp;simple but powerful SaaS service that could easily be&nbsp;added ',
                'into any workflow in&nbsp;any team. It&nbsp;synchronises&nbsp;UI components between technologies ',
                'and works across platforms&nbsp;&mdash; web, mobile and desktop.'
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
                                    [
                                        'Once changes are made you press ' ,
                                        {
                                            block: 'command',
                                            content: '&#8984;&nbsp;+&nbsp;P'
                                        },
                                        ' '
                                    ],
                                    'to&nbsp;sync&nbsp;it and they appear in&nbsp;your working tool ',
                                    'as&nbsp;a&nbsp;code or&nbsp;a&nbsp;design sketch.'
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
                                    'As&nbsp;a&nbsp;team product it&nbsp;is&nbsp;great for designers, ',
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
                'Protein requires no&nbsp;additional knowledge ',
                { block: 'br' },
                'or&nbsp;change of&nbsp;tools the team already use'
            ]
        },
        {
            block: 'section',
            mods: { view: 'helps' },
            title: 'Protein helps your Team',
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
                                    'Edit live&nbsp;UI components in&nbsp;an&nbsp;editor ',
                                    'of&nbsp;your choice'
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
                                    'Build and structure them ',
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
                                    'Link live&nbsp;UI components to&nbsp;the all project ',
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
                                    'Sync them with code implementation ',
                                    'in&nbsp;the background'
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
                                    'Get design changes by&nbsp;pull requests to&nbsp;VCS ',
                                    'not as&nbsp;layouts but as&nbsp;code you can work with'
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
                'We&nbsp;are inspired here at&nbsp;Protein and think that every tool the developer team uses ',
                { block: 'br' },
                'should be&nbsp;compatible with Protein to&nbsp;empower the magic of&nbsp;one another'
            ]
        },
        {
            block: 'section',
            mix: { block: 'workflow' },
            title: 'Workflow',
            desc: [
                'Protein is&nbsp;easily installed into existing design and development workflow ',
                'as&nbsp;a&nbsp;communication tool that team uses to&nbsp;exchange their designs and&nbsp;UI components '
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
            mix: { block: 'quote', mods: { theme: 'blue' } },
            content: [
                'Everyday use of&nbsp;Protein turns routine into incredible productivity ',
                { block: 'br' },
                'with no&nbsp;time waste on&nbsp;additional synchronizations'
            ]
        },
        {
            block: 'section',
            attrs: { id: 'starter-kit' },
            mix: { block: 'starter-kit' },
            title: 'Starter&nbsp;Kit',
            desc: [
                'We&nbsp;launch Protein as&nbsp;a&nbsp;Starter&nbsp;Kit ',
                'releasing integrations with other products you may use as&nbsp;new features later&nbsp;on'
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
                                mw:4
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
                                    'It&nbsp;converts UI&nbsp;components designs ',
                                    'into a&nbsp;source code and vice versa ',
                                    'regardless of&nbsp;the platform'
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
                                    'It&nbsp;synchronises ',
                                    'work on&nbsp;the interface development ',
                                    'in&nbsp;the background mode'
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
                                    'It&nbsp;works through the cloud storage with ',
                                    'a&nbsp;web access to&nbsp;the team management ',
                                    'and integrations settings'
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        sw: 4,
                                        m: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            icon: { block: 'icon', mods: { technology: 'other' }},
                                            text: 'And other frameworks'
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
                'Protein helps your team speak one language and use one library ',
                { block: 'br' },
                'instead of&nbsp;multiple copies and designs'
            ]
        },
        {
            block: 'section',
            mix: { block: 'integrations' },
            title: 'Integrations',
            desc: [
                'We&nbsp;extend Protein to&nbsp;any service you might use as&nbsp;integration ',
                'available after Starter&nbsp;Kit release'
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
                                    },
                                    content: {
                                        block: 'technologies',
                                        elem: 'item',
                                        content: {
                                            block: 'technology',
                                            url: 'http://www.relativewave.com/form/',
                                            icon: { block: 'icon', mods: { technology: 'google-form' }},
                                            text: 'Google Form'
                                        }
                                    }
                                },
                                {
                                    elem: 'col',
                                    elemMods: {
                                        sw: 4,
                                        m: true
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
                                        sw: 4,
                                        m: true
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
                        'If&nbsp;you use any other tool than listed above, email it&nbsp;to&nbsp;us at ',
                        {
                            block: 'link',
                            mods: { theme: 'on-white' },
                            url: 'mailto:ask@theprotein.io',
                            content: 'ask@theprotein.io'
                        },
                        ' ',
                        { tag: 'br' },
                        'and we&nbsp;try our best to&nbsp;release it&nbsp;as&nbsp;integration'
                    ]
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'quote', mods: { theme: 'blue' } },
            content: [
                'With Protein your team develops the core product faster ',
                { block: 'br' },
                'with no&nbsp;efforts wasted on&nbsp;the&nbsp;go'
            ]
        },
        {
            block: 'section',
            attrs: { id: 'features' },
            mix: { block: 'features' },
            title: 'Features',
            desc: [
                'We&nbsp;plan on&nbsp;extending our core product with features ',
                'that soon will be&nbsp;available inside a&nbsp;Starter&nbsp;Kit'
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
                                    'Windows&nbsp;OS, iOS and Android OS ',
                                    'platforms to&nbsp;give your team ',
                                    'an&nbsp;option to&nbsp;provide layouts ',
                                    'as&nbsp;ready-to-go xml-schemas ',
                                    'of&nbsp;the interface and more'
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
                                    'Ability to&nbsp;live preview ',
                                    'your components to&nbsp;help ',
                                    'the team understand how ',
                                    'it&nbsp;works while they work on ',
                                    'it&rsquo;s creation. Available across ',
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
                                    'Possibility to&nbsp;convert ',
                                    'separate components your team ',
                                    'is&nbsp;working on&nbsp;as&nbsp;well ',
                                    'as&nbsp;full screens to&nbsp;help ',
                                    'a&nbsp;layout become ',
                                    'an&nbsp;application right away'
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
                'Protein will go&nbsp;live on&nbsp;Spring 2016&nbsp;as a&nbsp;Starter&nbsp;Kit version ',
                'with integrations releases as&nbsp;fast as&nbsp;possible'
            ],
            content: [
                {
                    block: 'dates',
                    elem: 'image'
                }
            ]
        },
        {
            block: 'section',
            attrs: { id: 'pricing' },
            mix: { block: 'pricing' },
            title: 'Pricing',
            desc: [
                'Protein Starter Kit will be&nbsp;launched in&nbsp;Spring 2016&nbsp;on an&nbsp;annual subscription basis.',
                'All released integrations and features will be&nbsp;shipped as&nbsp;updates of&nbsp;the core product.'
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
                                mw: 1,
                                lw: 2
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: 6,
                                m: true,
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
                                m: true,
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
                                mw: 1,
                                lw: 2
                            }
                        }
                    ]
                },
                {
                    block: 'hint',
                    mix: { block: 'pricing', elem: 'hint' },
                    content: [
                        'If&nbsp;you are interested in&nbsp;custom settings or&nbsp;an&nbsp;enterprise version of&nbsp;the product, ',
                        { block: 'br' },
                        'please, drop&nbsp;us a&nbsp;line&nbsp;at ',
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
            mix: [{ block: 'pre-order' }, { block: 'quote', mods: { theme: 'green' }}],
            title: 'Pre-order',
            desc: [
                'Pre-order starts on&nbsp;Christmas in&nbsp;an&nbsp;early bird mode with a&nbsp;limited number of&nbsp;licenses ',
                'you get discounted if&nbsp;subscribe'
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
                                name: 'Alexey Yaroshevich',
                                nickname: 'yaroshevich',
                                post: 'VP Engineering'
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
                                image: 'i/people/voischev.png',
                                name: 'Ivan Voischev',
                                nickname: 'voischev',
                                post: 'VP Frontend Development'
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: '0',
                                mw: '2'
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
                                image: 'i/people/mursya.png',
                                name: 'Yelena Jetpyspayeva',
                                nickname: 'mursya',
                                post: 'VP Marketing'
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
                                sw: '0',
                                mw: '2'
                            }
                        },
                        {
                            elem: 'col',
                            mods: {
                                sw: 6,
                                mw: 12
                            },
                            content: {
                                block: 'people',
                                image: 'i/people/people.png',
                                name: [
                                    'We&nbsp;are looking ',
                                    { block: 'br' },
                                    'for new team members!'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer'
        },
        {
            block: 'google-analytics',
            params: {
                id: 'UA-63201396-1'
            }
        },
        {
            block: 'yandex-metrica',
            params: {
                id: 32852202,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true,
                trackHash:true
            }
        }
    ]
};
