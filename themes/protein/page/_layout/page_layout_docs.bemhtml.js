block('page').mod('layout', 'docs')(
  content()(function() {
    return [
      {
        elem: 'header',
        content: {
          block: 'header',
          content: this._multilang && {
            block: 'lang-switcher',
            langs: this._multilang
          }
        }
      },
      {
        elem: 'content',
        content: this.ctx.content
      },
      {
        elem: 'footer',
        content: {
          block: 'footer'
        }
      },
      this.ctx.scripts
    ];
  })
);
