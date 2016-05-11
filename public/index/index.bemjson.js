module.exports = {
    block: 'page',
    title: 'UI syncing service',
    favicon: 'favicon@2x.png',
    doctype: [
        '<!DOCTYPE html>',
        '<!-- © The Protein Corp. All rights reserved. | http://theprotein.io -->'
    ],
    head: [
        { elem: 'meta',
            attrs: {
                name: 'description',
                content: [
                    '“Protein” updates the source code with latest changes in design tools made on different platforms and vice versa. ' +
                    'It therefore guarantees collaborative work on UI, increasing the team’s productivity drastically.'
                ]
            }
        },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        {
            block: 'social-meta',
            title: 'The long-awaited solution that is a revolution in product creation',
            description: '“Protein” updates the source code with latest changes in design tools made on different platforms and vice versa. It therefore guarantees collaborative work on UI, increasing the team’s productivity drastically. ',
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
            content: [
                {
                    block: 'intro',
                    title: 'Imagine the revolution in the product creation',
                    desc: [
                        'Synchronize ',
                        { block: 'mark', mods: { theme: 'g' }, content: 'UI design' },
                        ' and its ',
                        { block: 'mark', mods: { theme: 'o' }, content: 'source code' },
                        ' in the background'
                    ],
                    video: {
                        block: 'video',
                        poster: '../i/poster.png',
                        preload: 'auto',
                        autoplay: 'autoplay',
                        loop: 'loop',
                        source: [{ url: '../intro__video.mp4' }]
                    }
                }
            ]
        },
        {
            block: 'section',
            title: 'Protein',
            mods: { view: 'protein' },
            attrs: { id: 'protein' },
            desc: [
                'Protein updates the source code with latest changes in design tools made on different platforms ',
                'and vice versa. It works across platforms&nbsp;&mdash; web, mobile and desktop. '
            ],
            content: [
                {
                    block: 'row',
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
                                title: 'Convert',
                                 desc: [
                                     'Convert any UI design into',
                                     'source code and vice versa'
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
                                title: 'Sync',
                                 desc: [
                                     'Sync design with any techs, ',
                                     'frameworks, and platforms'
                                 ]
                            }
                        },
                        {
                            elem: 'col',
                            mods: { sw: 12, mw: 4 },
                            content: {
                                block: 'card',
                                image: {
                                    block: 'icon',
                                    mods: { inline: true },
                                    path: 'team'
                                },
                                title: 'Collaborate',
                                desc: [
                                     'Share any design changes',
                                     'with team immediately'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            attrs: { id: 'features' },
            title: 'Features',
            desc: [
                'We&nbsp;will launch Protein as&nbsp;a scalable syncing platform'
            ],
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
                                icon: { block: 'image', url: '../i/helps/1.svg'},
                                text: [
                                    'Edit live UI in Sketch  App ',
                                    'or Adobe Illustrator'
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
                                icon: { block: 'image', url: '../i/helps/2.svg'},
                                text: [
                                    'Share UI libraries and layouts ',
                                    'with other team members'
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
                                icon: { block: 'image', url: '../i/helps/3.svg'},
                                text: [
                                    'Live preview for UI which based ',
                                    'on your source code'
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
                                icon: { block: 'image', url: '../i/helps/4.svg'},
                                text: [
                                    'Use your  favorite Version Control ',
                                    'System for design'
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
                                icon: { block: 'image', url: '../i/helps/5.svg'},
                                text: [
                                    'Sync vector UI and source code ',
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
                                icon: { block: 'image', url: '../i/helps/6.svg'},
                                text: [
                                    'Integrate UI with external services ',
                                    'for better productivity'
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            attrs: { id: 'integrations' },
            title: 'Integrations',
            desc: [
                'We&nbsp;extend Protein to&nbsp;any service you might use as&nbsp;integration'
            ],
            content: [
                {
                    block: 'technologies',
                    content: [
                        {
                            block: 'row',
                            content: [
                                // {
                                //     elem: 'col',
                                //     elemMods: {
                                //         sw: 4,
                                //         m: true
                                //     },
                                //     content: {
                                //         block: 'technologies',
                                //         elem: 'item',
                                //         content: {
                                //             block: 'technology',
                                //             url: 'https://www.parse.com',
                                //             icon: { block: 'icon', mods: { technology: 'parse' }},
                                //             text: 'Parse'
                                //         }
                                //     }
                                // },
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
                                            url: 'http://sketchapp.com',
                                            icon: { block: 'icon', mods: { technology: 'sketch' }},
                                            text: 'Sketch'
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
                                            url: 'http://adobe.com/products/illustrator.html',
                                            icon: { block: 'icon', mods: { technology: 'illustrator' }},
                                            text: 'Adobe Illustrator'
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
                                            url: 'http://fusetools.com',
                                            icon: { block: 'icon', mods: { technology: 'fuse' }},
                                            text: 'Fuse'
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
                                            url: 'http://github.com',
                                            icon: { block: 'icon', mods: { technology: 'github' }},
                                            text: 'GitHub'
                                        }
                                    }
                                },
                                // {
                                //     elem: 'col',
                                //     elemMods: {
                                //         sw: 4,
                                //         m: true
                                //     },
                                //     content: {
                                //         block: 'technologies',
                                //         elem: 'item',
                                //         content: {
                                //             block: 'technology',
                                //             url: 'http://www.relativewave.com/form/',
                                //             icon: { block: 'icon', mods: { technology: 'google-form' }},
                                //             text: 'Google Form'
                                //         }
                                //     }
                                // },
                                // {
                                //     elem: 'col',
                                //     elemMods: {
                                //         sw: 4,
                                //         m: true
                                //     },
                                //     content: {
                                //         block: 'technologies',
                                //         elem: 'item',
                                //         content: {
                                //             block: 'technology',
                                //             url: 'http://www.pixate.com',
                                //             icon: { block: 'icon', mods: { technology: 'pixate' }},
                                //             text: 'Pixate'
                                //         }
                                //     }
                                // },
                                // {
                                //     elem: 'col',
                                //     elemMods: {
                                //         sw: 4,
                                //         m: true
                                //     },
                                //     content: {
                                //         block: 'technologies',
                                //         elem: 'item',
                                //         content: {
                                //             block: 'technology',
                                //             url: 'https://marvelapp.com',
                                //             icon: { block: 'icon', mods: { technology: 'marvel' }},
                                //             text: 'Marvel'
                                //         }
                                //     }
                                // }
                            ]
                        }
                    ]
                },
                {
                    block: 'hint',
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
            mods: { view: 'workflow' },
            attrs: { id: 'workflow' },
            title: 'How it works',
            desc: [
                'Protein is&nbsp;easily installed into existing design and development process ',
                'as&nbsp;a&nbsp;communication tool that team uses to&nbsp;exchange their UI design'
            ],
            content: [
                {
                    block: 'workflow-scheme'
                }
            ]
        },
        ///
        {
            block: 'section',
            mods: { view: 'beta' },
            attrs: { id: 'beta' },
            title: 'Beta',
            desc: [
                'Sign up to the Protein Beta with your team and be first who can sync user interface in the world. ',
                'Revolution is here and starts for you immediately!'
            ],
            content: [
                {
                    block: 'button',
                    mods: { type: 'link', size: 'l', theme: 'p' },
                    attrs: { target: '_blank' },
                    url: '//eepurl.com/bJQ12H',
                    text: 'Sign up'
                }
            ]
        },
        // {
        //     block: 'section',
        //     mods: { view: 'team' },
        //     attrs: { id: 'team' },
        //     title: 'Team',
        //     desc: [
        //         'A team of few professionals with hands-on experience in design, development, ',
        //         'and large scale IT projects management and years of working background'
        //     ],
        //     content: [
        //         {
        //             block: 'row',
        //             content: [
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: 6,
        //                         mw: 4
        //                     },
        //                     content: {
        //                         block: 'people',
        //                         image: '../i/people/awinogradov.png',
        //                         name: 'Anton Winogradov',
        //                         nickname: 'awinogradov',
        //                         post: 'CEO'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: 6,
        //                         mw: 4
        //                     },
        //                     content: {
        //                         block: 'people',
        //                         image: '../i/people/yaroshevich.png',
        //                         name: 'Alexey Yaroshevich',
        //                         nickname: 'yaroshevich',
        //                         post: 'Software Engineer'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: 6,
        //                         mw: 4
        //                     },
        //                     content: {
        //                         block: 'people',
        //                         image: '../i/people/voischev.png',
        //                         name: 'Ivan Voischev',
        //                         nickname: 'voischev',
        //                         post: 'Software Engineer'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: '0',
        //                         mw: '2'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: 6,
        //                         m: true
        //                     },
        //                     content: {
        //                         block: 'people',
        //                         image: '../i/people/yetior.png',
        //                         name: 'Vasiliy Loginevskiy',
        //                         nickname: 'yeti_or',
        //                         post: 'Software Engineer'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: 6,
        //                         m: true
        //                     },
        //                     content: {
        //                         block: 'people',
        //                         image: '../i/people/squorax.png',
        //                         name: 'Vladimir Stegantsov',
        //                         nickname: 'squorax',
        //                         post: 'Creative Director'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: '0',
        //                         mw: '2'
        //                     }
        //                 },
        //                 {
        //                     elem: 'col',
        //                     mods: {
        //                         sw: 6,
        //                         mw: 12
        //                     },
        //                     content: {
        //                         block: 'people',
        //                         mods: { theme:'jobs' },
        //                         image: '../i/people/people.png',
        //                         title: [
        //                             'We&nbsp;are looking ',
        //                             { block: 'br' },
        //                             'for new team members!'
        //                         ]
        //                     }
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     block: 'section',
        //     mods: { view: 'subscribe' },
        //     desc: [
        //         'Subscribe to our newsletter to get news and exclusive discounts'
        //     ],
        //     content: [
        //         { block: 'mailchimp-subscribe' }
        //     ]
        // },
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
