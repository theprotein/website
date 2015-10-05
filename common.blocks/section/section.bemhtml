block('section')(
    tag()('section'),
    content()(function() {
        return {
            elem: 'content',
            content: [
                this.ctx.title && {
                    elem: 'title',
                    content: this.ctx.title
                },
                this.ctx.desc && {
                    elem: 'desc',
                    content: this.ctx.desc
                },
                applyNext()
            ]
        };
    }),
    elem('title').tag()('h2'),
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
