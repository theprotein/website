block('social')(
    tag()('nav'),
    content()(function() {
        return [
            {
                block: 'link',
                url: 'https://medium.com/@theprotein',
                content: {
                    block: 'icon',
                    mods: { inline: true, social: 'medium' },
                    path: 'social/medium'
                }
            },
            {
                block: 'link',
                url: 'http://github.com/theprotein',
                content: {
                    block: 'icon',
                    mods: { inline: true, social: 'github' },
                    path: 'social/github'
                }
            },
            {
                block: 'link',
                url: 'http://twitter.com/protein_io',
                content: {
                    block: 'icon',
                    mods: { inline: true, social: 'twitter' },
                    path: 'social/twitter'
                }
            },
            {
                block: 'link',
                url: 'http://facebook.com/proteinio',
                content: {
                    block: 'icon',
                    mods: { inline: true, social: 'facebook' },
                    path: 'social/facebook'
                }
            }
        ];
    })
);
