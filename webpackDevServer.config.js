var webpack = require("webpack"),
    path = require("path"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

var files = require("./getFiles");

var copyFiles = [].concat(
    files.getPolyfills('development'),
    files.getLibs('development'),
    files.getIndex('development')
    //files.getOther()
);

module.exports = {
    devtool: 'cheap-module-inline-source-map',

    context: path.resolve(__dirname),
    entry: {
        bundle: "./app/app.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: 'http://localhost:8080/',
        
        filename: "[name].js",
        pathinfo: true
    },
    plugins: [
        new CopyWebpackPlugin(copyFiles),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                loaders: ['react-hot','babel?cacheDirectory']
            },
            {test: /\.md/, loader: 'babel!markdown-jsx-loader'},
            {test: /\.s?css$/, loader: 'style!css?sourceMap!postcss'},
            {test: /\.svg|eot|ttf|woff|woff2|ico|png|gif|jpg($|\?)/, loader: 'file?name=resources/[hash].[ext]'}
        ]
    },
    externals:{
        "systemjs": 'var System'
    },
    resolve: {
        root: path.resolve(__dirname, "app"),
        extensions: ["", ".js", '.jsx']
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
};