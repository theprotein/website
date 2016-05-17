block('people')(
    js()(true),
    tag()(function() {
        return this.ctx.nickname ? 'a' : 'span';
    }),
    attrs()(function() {
        return this.ctx.nickname && { href: 'http://twitter.com/' + this.ctx.nickname };
    }),
    content()(function() {
        return [
            {
                block: 'image',
                mix: { block: this.block, elem: 'image'},
                url: this.ctx.image
            },
            {
                elem: 'name',
                content: this.ctx.name
            },
            this.ctx.nickname && {
                elem: 'nickname',
                content: '@' + this.ctx.nickname
            },
            this.ctx.post && {
                elem: 'post',
                content: this.ctx.post
            }
        ];
    }),
    elem('name').tag()('span'),
    elem('nickname').tag()('span'),
    elem('post').tag()('span')
);
