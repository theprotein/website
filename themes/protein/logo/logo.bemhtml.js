block('logo')(
  tag()('span'),
  content()(function () {
    const fs = require('fs');
    if(this.ctx.mods && this.ctx.mods.product) {
      return fs.readFileSync(`${process.cwd()}/themes/protein/logo/_product/logo_product_${this.ctx.mods.product}.svg`, 'utf-8');
    }

    return fs.readFileSync(`${process.cwd()}/themes/protein/logo/logo.svg`, 'utf-8');
  })
);
