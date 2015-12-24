var nodemon = require('nodemon'),
    bs = require('browser-sync');

nodemon({
    watch: [
        'common.blocks',
        'public/index/index.bemjson.js'
    ],
    ext: 'bemhtml js css',
    exec: 'npm run dev'
});

bs.init({
    server: {
        baseDir: './public'
    },
    files: [
        './public/index/*.css',
        './public/index/*.js',
        './public/index/*.html'
    ],
    tunnel: false,
    online: false,
    open: false,
    notify: false
});
