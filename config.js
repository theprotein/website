module.exports = {
  themes: [
    '../node_modules/bem-components/common.blocks',
    '../node_modules/bem-components/desktop.blocks',
    'protein'
  ],
  langs: ['en'],
  output: 'dist',
  postcssPlugins: [
    require('postcss-import'),
    require('sharps').postcss({
      maxWidth: '1100px',
      gutter: '0px',
      flex: 'flex'
    }),
    require('postcss-nested'),
    require('postcss-url')({ url: 'inline' }),
    require('postcss-font-magician')(),
    require('postcss-browser-reporter'),
    require('postcss-reporter')
  ],
  layouts: {
    root: {
      posthtmlPlugins: []
        .concat(require('mad-mark').posthtmlPlugins)
        .concat([
          require('./lib/posthtml-plugins/combine-root-by-sections')
        ])
    }
  },
  server: {
    open: false,
    ui: false
  }
};
