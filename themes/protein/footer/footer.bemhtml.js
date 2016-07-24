block('footer')(
  tag()('footer'),
  content()(function () {
    return {
      elem: 'content',
      content: [
        { block: 'copyright' }
      ]
    };
  })
);
