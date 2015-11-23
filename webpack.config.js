var Webpack = require('webpack'),
    path = require('path'),
    pkg = require('./package.json');

var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'src', 'build'),
    mainPath = path.resolve(__dirname, 'src', 'app.js');

var config = {
    devtool: 'eval',
    watch: true,
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            mainPath
        ],
        vendors: pkg.vendors
    },
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: nodeModulesPath,
                query:{presets:['es2015','react']}
            },
            {test:/\.css$/,loader:'style!css'},
            {test: /\.scss$/,loader:'style!css!sass'},
            {test: /\.(png|jpg|jpeg|gif|svg)$/,loader: 'url?limit=8192'},
            {test : /\.(woff|woff2|ttf|eot)$/,loader: 'url'}
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new Webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
        new Webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    }
};

module.exports = config;
