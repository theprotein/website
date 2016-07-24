module.exports = {
  extends: 'pedant',
  env: {
    browser: true,
    node: true,
    'shared-node-browser': true,
    es6: true,
    mocha: true,
    jquery: true
  },
  rules: {
    // *.deps.js -> ();
    'no-unused-expressions': 0
  },
  globals: {
    // Dynamics Framework
    Snap: true,
    // YModules
    modules: true,
    // BEM
    block: true,
    elem: true,
    js: true,
    def: true,
    match: true,
    tag: true,
    attrs: true,
    mod: true,
    content: true,
    applyNext: true,
    applyCtx: true
  }
};
