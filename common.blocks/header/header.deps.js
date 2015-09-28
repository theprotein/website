({
    shouldDeps: [
        'menu',
        {
            block: 'menu-item',
            mods: { type: ['link', 'button'], 'scroll-to': true }
        },
        {
            block: 'link',
            mods: { pseudo: true }
        },
        {
            block: 'button'
        },
        'logo'
    ]
});
