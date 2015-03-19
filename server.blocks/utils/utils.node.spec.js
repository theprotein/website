modules.define('spec', ['utils', 'config'], function(provide, utils, config) {

    var path = require('path');

    describe('utils', function() {

        describe('isDev', function() {

            it('should return whether `env` is `development`', function() {
                config.set('env', 'development');
                utils.isDev().should.be.true;
                config.set('env', 'other');
                utils.isDev().should.be.false;
            });

        });

        describe('isStage', function() {

            it('should return whether `env` is `stage`', function() {
                config.set('env', 'stage');
                utils.isStage().should.be.true;
                config.set('env', 'other');
                utils.isStage().should.be.false;
            });

        });

        describe('resolveBundlePath', function() {

            it('should prepend `desktop.bundles`', function() {
                var bundlePath = utils.resolveBundlePath('test');
                bundlePath.should.equal(path.join(process.cwd(), 'desktop.bundles', 'test'));
            });

        });

        describe('getTemplateEngine', function() {

            it('should return correct path', function() {
                var data = { level : 'xxx', bundle : 'yyy' },
                    result = utils.getTemplateEngine(data, '.zzz');

                result.should.equal(
                    path.join(
                        process.cwd(),
                        'xxx.bundles',
                        'yyy',
                        'yyy.zzz'
                    )
                );
            });

        });

        describe('getStaticLevel', function() {

            it('should return corrent path', function() {
                var data = { level : 'xxx', bundle : 'yyy' },
                    result = utils.getStaticLevel(data);

                result.should.equal(path.join(
                    process.cwd(),
                    'xxx.bundles',
                    'yyy'
                ));
            });

        });

        describe('getAppOriginalUrl', function() {

            it('should return correct url', function() {
                var req = { url : '/xxx', headers : {}, get : function(key) { return 'host'; } },
                    result = utils.getAppOriginalUrl(req);

                result.should.equal('//host');

                config.set('baseUrl', '/');
                result = utils.getAppOriginalUrl(req);
                result.should.equal('//host');
            });

            it('should get url from "madison-context-root" header', function() {
                var req = { url : '/xxx', headers : { 'madison-context-root' : 'http://somehost:1111' }  },
                    result = utils.getAppOriginalUrl(req);

                result.should.equal('http://somehost:1111');
            });

            it('should get url from request for absolute url', function() {
                var req = { url : 'http://somehost:8080/xxx', headers : {} },
                    result = utils.getAppOriginalUrl(req);

                result.should.equal('http://somehost:8080');
            });
        });
    });

    provide();
});
