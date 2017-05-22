/**
 * Created by david on 19.05.17.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context:  path.resolve(__dirname, 'src/client'),
    entry: './app.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/client/public'),
    },
    watch: true,
    devtool: '#source-map',
    module: {
        rules:[
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    }
};