module.exports = function(bh) {
    bh.match('logo', function(ctx, json) {
        ctx.content([
            {
                elem : 'inner',
                content : [
                    {
                        elem : 'letter',
                        content : 'P'
                    }
                ]
            }
        ]);
    });
};
