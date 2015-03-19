module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        ctx.content([
            {
                elem : 'header',
                content : [

                ]
            },
            {
                elem : 'content',
                content : [
                    {
                        block : 'heading',
                        mods : { theme : 'proto' },
                        content : 'Protein'
                    },
                    json.view
                ]
            },
            {
                elem : 'footer',
                content : [

                ]
            }
        ]);
    });
};
