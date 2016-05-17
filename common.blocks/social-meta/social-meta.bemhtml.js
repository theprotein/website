block('social-meta').def()(function() {
    var ctx = this.ctx;
    var meta = [];

    ctx.title           && meta.push({ block: 'page', elem: 'meta', attrs: { property: 'og:title', content: ctx.title } });
    ctx.description     && meta.push({ block: 'page', elem: 'meta', attrs: { property: 'og:description', content: ctx.description } });
    ctx.type            && meta.push({ block: 'page', elem: 'meta', attrs: { property: 'og:type', content: ctx.type } });
    ctx.keywords        && meta.push({ block: 'page', elem: 'meta', attrs: { property: 'og:article:tag', content: ctx.keywords } });
    ctx.url             && meta.push({ block: 'page', elem: 'meta', attrs: { property: 'og:url', content: ctx.url } });
    ctx.image           && meta.push({ block: 'page', elem: 'meta', attrs: { property: 'og:image', content: ctx.image } });

                           meta.push({ block: 'page', elem: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } });
    ctx.twitter         && meta.push({ block: 'page', elem: 'meta', attrs: { name: 'twitter:site', content: ctx.twitter } });
    ctx.title           && meta.push({ block: 'page', elem: 'meta', attrs: { name: 'twitter:title', content: ctx.title } });
    ctx.description     && meta.push({ block: 'page', elem: 'meta', attrs: { name: 'twitter:description', content: ctx.description } });
    ctx.twitterImage    && meta.push({ block: 'page', elem: 'meta', attrs: { name: 'twitter:image', content: ctx.twitterImage } });

    return applyCtx(meta);
});
