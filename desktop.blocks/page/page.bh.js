module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        ctx.content([
            {
                elem : 'header',
                content : [
                    {
                        block : 'header',
                        content : [
                            {
                                block : 'logo',
                                mods : { theme : 'proto', view : 'full', mode : 'default', size : 'xl' },
                            }
                        ]
                    }
                ]
            },
            {
                elem : 'content',
                content : json.view
            },
            {
                elem : 'footer',
                content : [
                    {
                        block : 'footer',
                        content : [
                            {
                                block : 'logo',
                                mods : { theme : 'proto', view : 'letter', mode : 'desaturate', size : 'm' },
                            },
                            {
                                block : 'copyright',
                                content : 'Copyright © The Protein Corp., 2015'
                            }
                        ]
                    }
                ]
            }
        ]);
    });
};
