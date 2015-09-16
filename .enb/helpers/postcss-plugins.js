module.exports = [
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-simple-vars')({
        variables : {
            gridMaxWidth : '1000px',
            gridGutter : '0px',
            gridFlex : false
        }
    }),
    require('lost'),
    require('cssnext')(),
    require('postcss-custom-properties'),
    require('postcss-each'),
    require('postcss-nested'),
    require('postcss-url')({
        url: 'rebase'
    }),
    require('postcss-font-magician')({ /* options */ }),
    require('autoprefixer')({
        browsers: [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'android 4',
            'ios >= 5'
        ]
    })
];
