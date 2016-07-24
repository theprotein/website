'use strict';

const products = {
  transporter: 1,
  dynamics: 1,
  madmark: 1,
  posthtml: 1,
  sharps: 1
};

module.exports = function(tree) {
  let t = [];
  tree.forEach(node => {
    let len = t.length - 1;
    let maybeProd = node.content && node.content[0].replace(/ /g, '').toLowerCase();
    if (node.block === 'heading') {
      if(products[maybeProd]) {
        t.push({
          block: 'section',
          mods: { view: maybeProd },
          content: [node]
        });
      } else {
        t.push({
          block: 'section',
          mods: (node.mods && node.mods.lvl === '1') && { view: 'main' },
          content: [node]
        });
      }
    } else {
      t[len].content.push(node);
    }
  });

  return t;
};
