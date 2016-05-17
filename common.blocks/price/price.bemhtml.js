block('price')(
    content()(function() {
        return [
            {
                elem: 'title',
                content: this.ctx.title
            },
            {
                elem: 'val',
                content: '$' + this.ctx.val
            },
            {
                elem: 'footer',
                content: 'per year'
            }
        ];
    })
);
