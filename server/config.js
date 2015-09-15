module.exports = {
    express : {
        port : '3000'
    },
    settings : {
        baseUrl : 'http://theprotein.io'
    },
    log : {
        server : {
            transport : 'Console',
            view : {
                level       : 'verbose',
                prettyPrint : true,
                colorize    : true,
                timestamp   : true,
                label       : 'server'
            }
        },
        browser : {
            transport : 'Console',
            view : {
                level       : 'verbose',
                prettyPrint : true,
                colorize    : true,
                timestamp   : true,
                label       : 'browser'
            }
        }
    }
};
