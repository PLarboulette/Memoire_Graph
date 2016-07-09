/**
 * Created by Pierre on 17/06/16.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'app'),
                query: {
                    presets: 'es2015'
                }
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map'
};