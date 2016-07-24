block('icon').mod('service', 'github')(
  content()(function () {
    const fs = require('fs');
    return fs.readFileSync(`${process.cwd()}/themes/protein/icon/_service/icon_service_github.svg`, 'utf-8');
  })
);
