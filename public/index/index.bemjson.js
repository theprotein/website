module.exports = {
    block: 'page',
    title: 'UI syncing service',
    favicon: '/favicon@2x.png',
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
            content: {
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
        },
        {
            block: 'section',
            title: 'Protein',
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
                                // desc: [
                                //     'Convert UI design into source code ',
                                //     'and vice versa by hotkey'
                                // ]
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
                                // desc: [
                                //     'Synchronise work on UI ',
                                //     'in&nbsp;the background'
                                // ]
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
                                // desc: [
                                //     'Increase the team’s ',
                                //     'productivity drastically'
                                // ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mods: { theme: 'gray' },
            attrs: { id: 'features' },
            title: 'Features',
            desc: [
                'We&nbsp;will launch Protein as&nbsp;a&nbsp;Starter&nbsp;Kit as scalable syncing platform'
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
            mods: { theme: 'gray' },
            attrs: { id: 'workflow' },
            mix: { block: 'workflow' },
            title: 'Workflow',
            desc: [
                'Protein is&nbsp;easily installed into existing design and development workflows ',
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
                                val: '199'
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
            mods: { theme: 'gray' },
            attrs: { id: 'team' },
            title: 'Team',
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
                                image: '../i/people/awinogradov.png',
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
                                image: '../i/people/yaroshevich.png',
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
                                image: '../i/people/voischev.png',
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
                                image: '../i/people/mursya.png',
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
                                image: '../i/people/squorax.png',
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
                                mods: { theme:'jobs' },
                                image: '../i/people/people.png',
                                title: [
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
            block: 'section',
            attrs: { id: 'signup' },
            title: 'Sign up to Beta',
            desc: [
                'Pre-order starts on&nbsp;Christmas in&nbsp;an&nbsp;early bird mode with a&nbsp;limited number of&nbsp;licenses ',
                'you get discounted if you subscribe'
            ],
            content: [
                {
                    block: 'pre-order',
                    elem: 'content',
                    content: [
                        {
                            block: 'button',
                            mods: { type: 'link', size: 'l' },
                            url: 'http://eepurl.com/boJcIH',
                            text: 'Subscribe to News'
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
