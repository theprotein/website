block('logo')(
  tag()('span'),
  content()(function () {
    const fs = require('fs');
    return fs.readFileSync(`${process.cwd()}/themes/protein/logo/logo.svg`, 'utf-8');
  })
);
