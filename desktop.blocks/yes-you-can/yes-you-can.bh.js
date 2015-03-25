module.exports = function(bh) {
    bh.match('yes-you-can', function(ctx, json) {
        ctx.js(true);

        ctx.content([
            {
                elem : 'info',
                content : json.info
            },
            {
                elem : 'control',
                content : json.control
            },
            {
                elem : 'settings',
                content : json.settings
            }
        ]);
    });
};
