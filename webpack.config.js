const path = require('path')

module.exports = options => {
    return {
        entry: './themes/custom/example_react/src/main.js',
        output: {
            path: path.resolve(__dirname, './sites/default/files/dist'),
            filename: 'build.js'
        },
        module: {
            rules: [{
                test: /.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                }],
            }],
        },
    }
}