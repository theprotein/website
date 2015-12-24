block('video')(
    tag()('video'),
    attrs()(function() {
        var ctx = this.ctx;
        return this.extend(applyNext(), {
            poster: ctx.poster,
            preload: ctx.preload,
            autoplay: ctx.autoplay,
            loop: ctx.loop
        });
    }),
    content()(function() {
        var source = [].concat(this.ctx.source);
        return source.map(function(item) {
            item.elem = 'source';
            return item;
        });
    }),
    elem('source')(
        tag()('source'),
        attrs()(function() {
            var ctx = this.ctx,
                parseUrl = ctx.url.split('.'),
                type = 'video/' + parseUrl[parseUrl.length - 1];

            return this.extend(applyNext(), {
                src: ctx.url,
                type: ctx.type || type,
                autoplay: ctx.autoplay,
                loop: ctx.loop
            });
        })
    )
);
