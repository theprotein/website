module.exports = function(bh) {
    bh.match('promo', function(ctx, json) {
        ctx.tag('section');
    });
};
