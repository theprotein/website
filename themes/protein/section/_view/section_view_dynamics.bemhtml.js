block('section').mod('view', 'dynamics')(
  elem('content').content()(function () {
    let content = applyNext();
    content[0].shift(); // remove heading
    return [
      content,
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
    ];
  })
);
