process.env.NODE_ENV = 'production';

modules.define('spec', ['config'], function(provide, config) {

    var expect = chai.expect;

    describe('config', function() {

        it('should have get and set methods', function(done) {
            expect(config.set).to.be.defined;
            expect(config.get).to.be.defined;
            expect(config.get('test_property')).to.not.be.defined;

            config.set('test_property', 'test_value');
            config.get('test_property').should.equal('test_value');
            done();
        });

        it('should use environment specified by NODE_ENV', function(done) {
            config.get('env').should.equal('production');
            done();
        });
    });

    provide();

});
