block('link')(
  def()(function() {
    const mods = this._mods || this.mods;
    return applyNext({
      _mods: {
        theme: mods.theme,
        size: mods.size
      }
    });
  }),

  elem('text').tag()('span'),
  elem('icon').tag()('span'),

  content()(function() {
    const ctx = this.ctx;
    const content = [ctx.icon && { elem: 'icon', content: ctx.icon }];
    ctx.text && content.push({ elem: 'text', content: ctx.text });
    return content;
  },

  match(function() { return typeof this.ctx.content !== 'undefined'; })(function() {
    return this.ctx.content;
  }))
);
