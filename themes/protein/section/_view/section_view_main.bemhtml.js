block('section').mod('view', 'main')(
  elem('content').content()(function () {
    return [
      applyNext(),
      {
        elem: 'actions',
        content: [
          {
            block: 'input',
          },
          {
            block: 'button',
            mods: { view: 'action' },
            text: 'Subscribe'
          }
        ]
      }
    ];
  })
);
