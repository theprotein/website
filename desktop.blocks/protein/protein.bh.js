module.exports = function(bh) {
    bh.match('protein', function(ctx, json) {
        ctx.content([
            { block : 'features' }
        ]);
    });
};
