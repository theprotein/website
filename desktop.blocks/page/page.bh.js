module.exports = function(bh) {
    bh.match('page', function(ctx, json) {
        ctx.content([
            {
                elem : 'header',
                content : [
                    {
                        block : 'logo',
                        mods : { theme : 'proto', view : 'centered', size : 'xl' },
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

                ]
            }
        ]);
    });
};
