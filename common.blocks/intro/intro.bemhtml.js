block('intro')(
    content()(function() {
        var ctx = this.ctx;

        return [
            {
                elem: 'content',
                content: [
                    {
                        elem: 'title',
                        content: ctx.title
                    },
                    {
                        elem: 'desc',
                        content: ctx.desc
                    }
                ]
            },
            {
                elem: 'video',
                content: ctx.video
            }
        ];
    })
);
