module.exports = function(bh) {
    bh.match('features', function(ctx, json) {
        ctx.tag('section');

        ctx.content([
            {
                block : 'row',
                content : [
                    {
                        block : 'features',
                        elem : 'item',
                        content : [
                            {
                                block : 'icon',
                                mix : { block : 'features', elem : 'icon' }
                            },
                            {
                                elem : 'title',
                                content : 'Live components'
                            }
                        ]
                    },
                    {
                        block : 'features',
                        elem : 'item',
                        content : [
                            {
                                block : 'icon',
                                mix : { block : 'features', elem : 'icon' }
                            },
                            {
                                elem : 'title',
                                content : 'Live interfaces'
                            }
                        ]
                    },
                    {
                        block : 'features',
                        elem : 'item',
                        content : [
                            {
                                block : 'icon',
                                mix : { block : 'features', elem : 'icon' }
                            },
                            {
                                elem : 'title',
                                content : 'Live guidelines'
                            }
                        ]
                    },
                    {
                        block : 'features',
                        elem : 'item',
                        content : [
                            {
                                block : 'icon',
                                mix : { block : 'features', elem : 'icon' }
                            },
                            {
                                elem : 'title',
                                content : 'Live user flow'
                            }
                        ]
                    },
                    {
                        block : 'features',
                        elem : 'item',
                        content : [
                            {
                                block : 'icon',
                                mix : { block : 'features', elem : 'icon' }
                            },
                            {
                                elem : 'title',
                                content : 'Awesome integrations'
                            }
                        ]
                    }
                ].map(function(item) {
                    return {
                        elem : 'col',
                        mods : { s : true },
                        content : item
                    };
                })
            }
        ]);
    });
};
