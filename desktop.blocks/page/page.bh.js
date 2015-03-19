module.exports = function(bh) {
    bh.match('page', function(ctx) {

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
                    ctx.view
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
