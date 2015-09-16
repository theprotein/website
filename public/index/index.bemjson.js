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
                                image: '',
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
                                image: '',
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
            mods: { view: 'quote' },
            content: {
                block: 'quote',
                content: [
                    'We are inspired here at Protein and think that every tool the developer team uses ',
                    { tag: 'br' },
                    'should be compatible with Protein to empower the magic of one another'
                ]
            }
        },
        {
            block: 'section',
            title: 'Starter Kit',
            desc: [
                'We launch Protein as a Starter Kit ',
                'releasing integrations with other products you may use ',
                'as new features later on '
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
                                image: '',
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
                            mods: { mw: 4 },
                            content: {
                                block: 'card',
                                image: '',
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
                            mods: { mw: 4 },
                            content: {
                                block: 'card',
                                image: '',
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
                    title: 'Goes along well with',
                    content: [
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'html' }},
                            text: 'HTML + CSS'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'os-x' }},
                            text: 'OS X'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'sketch' }},
                            text: [
                                'Sketch',
                                {
                                    elem: 'sup',
                                    content: '3'
                                }
                            ]
                        },
                        { tag: 'br' },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'react' }},
                            text: 'React'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'angular' }},
                            text: 'Angular'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'backbone' }},
                            text: 'Backbone'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'bem' }},
                            text: 'BEM'
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
            title: 'Integrations',
            desc: [
                'We plan on extending Protein to any service you might use as integration',
                'and will be releasing them soon after Starter Kit release. It will work through the cloud ',
                'storage with a web access to team management and integrations’ settings'
            ],
            content: [
                {
                    block: 'technologies',
                    title: 'Integrations available',
                    content: [
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'parse' }},
                            text: 'Parse'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'invision' }},
                            text: 'Invision'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'framerjs' }},
                            text: 'FramerJS'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'google-form' }},
                            text: 'Google Form'
                        },
                        { tag: 'br' },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'pixate' }},
                            text: 'Pixate'
                        },
                        {
                            block: 'technology',
                            icon: { block: 'icon', mods: { technology: 'marvel' }},
                            text: 'Marvel'
                        }
                    ]
                },
                {
                    block: 'hint',
                    content: [
                        'If you use any other tool than listed above, email it to us at ',
                        {
                            block: 'link',
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
                                image: '',
                                title: 'Platforms',
                                desc: [
                                    'Compatibility with ',
                                    'Windows OS, iOS и Android OS ',
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
                                image: '',
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
                                image: '',
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
                'Картиночка'
            ]
        },
        {
            block: 'section',
            content: [
                'Protein helps your team speak one language and use one library instead of multiple copies and designs. ',
                { tag: 'br' },
                'With Protein your team develops the core product faster with no efforts wasted on the go'
            ]
        },
        {
            block: 'section',
            content: [
                'Protein helps your team speak one language and use one library instead of multiple copies and designs ',
                { tag: 'br' },
                'and develop the core product faster with no efforts wasted on the go '
            ]
        },
        {
            block: 'section',
            title: 'Protein helps your team',
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: [
                                {
                                    block: 'info',
                                    icon: {},
                                    text: [
                                        'Edit live UI components in an editor',
                                        'of your choice'
                                    ]
                                },
                                {
                                    block: 'info',
                                    icon: {},
                                    text: [
                                        'Build and structurie them',
                                        'with live preview'
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: {
                                block: 'card',
                                image: '',
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
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            title: 'Delivery Dates',
            desc: [
                'Protein will go live on Easter 2016 as a Starter Kit version ',
                'with integrations’ releases as fast as possible'
            ],
            content: [
                'Картиночка с графиком'
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
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: {
                                block: 'price',
                                title: 'Early bird price',
                                price: '$99'
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: {
                                block: 'price',
                                title: 'After release price',
                                price: '$149'
                            }
                        }
                    ]
                },
                {
                    block: 'hint',
                    content: [
                        'Pre-order price (Early bird) includes a full version of Protein Starter Kit with features available at release date'
                    ]
                },
                [
                    'If you are interested in custom settings or an enterprise version  of the product, ',
                    'please, drop us a line at ',
                    {
                        block: 'link',
                        url: 'mailto: ask@theprotein.io',
                        content: 'ask@theprotein.io'
                    }
                ]
            ]
        },
        {
            block: 'sep'
        },
        {
            block: 'section',
            title: 'Protein Pre-order',
            desc: [
                'Protein Pre-order starts on Christmas 2015 as an early bird mode ',
                'where you can buy Protein Starter Kit with a Christmas price reduction ',
                'and show the community support during the development process'
            ],
            content: [
                {
                    block: 'button',
                    mods: { type: 'link' },
                    url: '',
                    text: 'Subscribe'
                },
                {
                    block: 'hint',
                    content: [
                        '<b>Important!</b> Since we launch a limited number of pre-ordered licenses which you get discounted, ',
                        'we advise you to hit Subscribe button to subscribe to the pre-order start. ',
                        'If you do so, we will email you a link to get your Christmas Protein  even cheaper!'
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
                                image: 'image',
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
                                image: 'image',
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
                                image: 'image',
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
                            mods: { mw: 6 },
                            content: {
                                block: 'people',
                                image: 'image',
                                name: 'Elena Jetpyspaeva',
                                nickname: 'mursya',
                                post: 'VP Business Development'
                            }
                        },
                        {
                            elem: 'col',
                            mods: { mw: 6 },
                            content: {
                                block: 'people',
                                image: 'image',
                                name: 'Vladimir Stegantsov',
                                nickname: 'squorax',
                                post: 'Lead Designer'
                            }
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
