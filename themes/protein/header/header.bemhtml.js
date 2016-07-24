block('header')(

  tag()('header'),

  content()(function () {
    let suffix = this._lang === this._config.langs[0] ? '' : `.${this._lang}`;

    const rootPages = this._data.root.filter(page => (page.name !== 'index'));
    const layoutPages = Object.keys(this._data).filter(layout => (layout !== 'root'));
    function makeMenuItem(name, url, checked) {
      return {
        block: 'menu-item',
        mods: { type: 'link', checked: checked },
        url: url,
        text: name.charAt(0).toUpperCase() + name.slice(1)
      };
    }

    return [
      {
        block: 'row',
        content: [
          {
            elem: 'col',
            elemMods: { sw: 3 },
            content: {
              block: 'link',
              url: '/',
              content: {
                block: 'logo'
              }
            }
          },
          {
            elem: 'col',
            elemMods: { sw: 9 },
            content: {
              block: 'menu',
              mix: { block: this.block, elem: 'menu' },
              mods: { view: 'main' },
              content: rootPages.map(page => makeMenuItem(
                page.name, `/${page.name}${suffix}.html`, this._name === page.name
              )).concat(layoutPages.map(layout => makeMenuItem(
                layout, `/${layout}/index${suffix}.html`, this._layout === layout
              ))).concat({
                block: 'menu-item',
                mods: { type: 'link' },
                url: '//github.com/theprotein',
                target: '_blank',
                icon: {
                  block: 'icon',
                  mods: { service: 'github' }
                }
              })
            }
          }
        ]
      }

    ]
  })
);
