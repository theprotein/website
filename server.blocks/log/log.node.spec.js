modules.define('spec', ['log'], function(provide, log) {

    describe('log', function() {

        it('should provide a middleware', function(end) {
            expect(log.middle).to.be.defined;

            var req = { body : {
                message : 'message text',
                level : 'info'
            } };
            var res = {
                status : function(code) {
                    code.should.equal(200);
                    return { end : end };
                }
            };
            log.middle(req, res);
        });
    });

    provide();
});
