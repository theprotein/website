module.exports = function(bh) {
    bh.match('protein', function(ctx, json) {
        ctx.content([
            { block : 'features' },
            {
                block : 'promo',
                content : [
                    {
                        elem : 'heading',
                        content : [
                            {
                                block : 'heading',
                                content : 'Live products for your customers and your soul'
                            }
                        ]
                    },
                    {
                        elem : 'actions',
                        content : [
                            {
                                block : 'button',
                                mods : { theme : 'proto', size : 'xl', type : 'link' },
                                url : '#',
                                text : 'Be founding member #1123'
                            }
                        ]
                    }
                ]
            }
        ]);
    });
};
