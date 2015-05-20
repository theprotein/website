module.exports = function(bh) {
    bh.match('footer', function(ctx, json) {
        ctx.content([
            // {
            //     block : 'menu',
            //     mods : { theme : 'proto', size : 'm' },
            //     content : [
            //         {
            //             block : 'menu-item',
            //             mods : { type : 'link', size : 'm' },
            //             val : 1,
            //             content : {
            //                 block : 'link',
            //                 mods : { theme : 'proto', size : 'm' },
            //                 url : '/pricing',
            //                 content : 'Pricing'
            //             }
            //         },
            //         {
            //             block : 'menu-item',
            //             mods : { type : 'link', size : 'm' },
            //             val : 2,
            //             content : {
            //                 block : 'link',
            //                 mods : { theme : 'proto', size : 'm' },
            //                 url : '/team',
            //                 content : 'Team'
            //             }
            //         },
            //         {
            //             block : 'menu-item',
            //             mods : { type : 'link', size : 'm' },
            //             val : 3,
            //             content : {
            //                 block : 'link',
            //                 mods : { theme : 'proto', size : 'm' },
            //                 url : '/blog',
            //                 content : 'Blog'
            //             }
            //         },
            //         {
            //             block : 'menu-item',
            //             mods : { type : 'link', size : 'm' },
            //             val : 3,
            //             content : {
            //                 block : 'link',
            //                 mods : { theme : 'proto', size : 'm' },
            //                 url : '/contacts',
            //                 content : 'Contacts'
            //             }
            //         }
            //     ]
            // },
            // {
            //     block : 'social-links',
            //     content : [
            //         {
            //             block : 'icon',
            //             mix : { block : 'social-links', elem : 'link' },
            //             mods : { theme : 'proto', social : 'facebook', size : 's' }
            //         },
            //         {
            //             block : 'icon',
            //             mix : { block : 'social-links', elem : 'link' },
            //             mods : { theme : 'proto', social : 'twitter', size : 's' }
            //         },
            //         {
            //             block : 'icon',
            //             mix : { block : 'social-links', elem : 'link' },
            //             mods : { theme : 'proto', social : 'github', size : 's' }
            //         },
            //         {
            //             block : 'icon',
            //             mix : { block : 'social-links', elem : 'link' },
            //             mods : { theme : 'proto', social : 'linkedin', size : 's' }
            //         },
            //         {
            //             block : 'icon',
            //             mix : { block : 'social-links', elem : 'link' },
            //             mods : { theme : 'proto', social : 'vimeo', size : 's' }
            //         }
            //     ]
            // },
            {
                block : 'logo',
                mods : { theme : 'proto', size : 'm' },
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
                    ' in Russia'
                ]
            },
            {
                block : 'copyright',
                content : 'Copyright © The Protein Corp., 2015'
            }
        ]);
    });
};
