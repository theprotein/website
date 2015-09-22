block('card')(
    content()(function() {
        this.ctx.image && (this.ctx.image.mix = { block: 'card', elem: 'image' });
        return [
            this.ctx.image,
            this.ctx.title && {
                elem: 'title',
                content: this.ctx.title
            },
            this.ctx.desc && {
                elem: 'desc',
                content: this.ctx.desc
            }
        ];
    }),
    elem('title').tag()('h3'),
    elem('desc').content()(function() {
        var content = applyNext(),
            len = content.length;
        return content.map(function(text, index) {
            return [
                text,
                len - 1 > index && { block: 'br' }
            ];
        });
    })
);
