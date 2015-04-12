module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        var content = json.view;
        content.mix = { block : 'page', elem : 'content' };

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
            content,
            {
                elem : 'footer',
                content : [
                    { block : 'footer' }
                ]
            }
        ]);
    });
};
