block('footer')(
    tag()('footer'),
    content()(function() {
        return {
            elem: 'content',
            content: [
                {
                    block: 'social',
                    mix: { block: this.block, elem: 'social' }
                },
                {
                    elem: 'text',
                    content: [
                        {
                            block: 'mark',
                            mods: { theme: 'g' },
                            content: 'Your team '
                        },
                        {
                            block: 'mark',
                            mods: { theme: 'o' },
                            content: ' is going to '
                        },
                        {
                            block: 'mark',
                            mods: { theme: 'r' },
                            content: 'love it!'
                        }
                    ]
                },
                {
                    block: 'menu',
                    mix: { block: this.block, elem: 'menu' },
                    content: [
                        // {
                        //     url: '#',
                        //     text: 'Privacy'
                        // },
                        // {
                        //     url: '#',
                        //     text: 'Terms of use'
                        // },
                        {
                            url: 'mailto:ask@theprotein.io',
                            text: 'ask@theprotein.io'
                        }
                    ].map(function(item) {
                        return {
                            block: 'menu-item',
                            mods: { type: 'link' },
                            content: {
                                block: 'link',
                                mods: { theme: 'on-color' },
                                url: item.url,
                                content: item.text
                            }
                        };
                    })
                },
                {
                    elem: 'copy',
                    content: [
                        'All you need is&nbsp;Protein &copy;&nbsp;The Protein Corp. All rights reserved.'
                    ]
                }
            ]
        };
    })
);
