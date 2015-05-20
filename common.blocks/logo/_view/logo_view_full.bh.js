module.exports = function(bh) {
    bh.match('logo_view_full', function(ctx, json) {
        ctx.content([
            {
                elem : 'inner',
                content : [
                    {
                        elem : 'letter',
                        content : 'P'
                    },
                    {
                        elem : 'title',
                        content : 'Protein'
                    }
                ]
            },
            {
                elem : 'description',
                content : 'New front end development workflow'
            }
        ]);
    });
};
