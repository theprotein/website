block('section').mod('view', 'dynamics')(
  content()(function () {
    let content = applyNext()[0].content[0].content[0]; // elem content
    content.shift(); // remove heading
    return [
      {
        elem: 'wrapper',
        content: [
          {
            elem: 'header',
            content: [
              {
                block: 'logo',
                mods: { product: 'dynamics' }
              }
            ]
          },
          {
            elem: 'content',
            content: content
          },
          {
            elem: 'actions',
            content: [
              {
                block: 'button',
                mods: { view: 'action' },
                text: 'Learn more'
              }
            ]
          }
        ]
      }
    ];
  })
);
