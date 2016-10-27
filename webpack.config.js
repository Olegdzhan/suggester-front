var webpack = require("webpack"),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    precss = require('precss'),
    autoprefixer = require('autoprefixer');

var files = require("./getFiles");

var copyFiles = [].concat(
    files.getPolyfills('development'),
    files.getLibs('development'),
    files.getIndex('production')
    //files.getOther()
);

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        bundle: "./app/app.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),

        //libraryTarget: "amd",
        filename: "[name].js",
        pathinfo: true
    },
    plugins: [
        new CopyWebpackPlugin(copyFiles),
        new ExtractTextPlugin("bundle.css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
        /*,new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        })*/
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'es3ify'
            },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                loaders: ['babel']
            },
            {test: /\.md/, loader: 'babel!markdown-jsx-loader'},
            {test: /\.s?css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss')},
            {test: /\.svg|eot|ttf|woff|woff2|ico|png|gif|jpg($|\?)/, loader: 'file?name=resources/[hash].[ext]'}
        ]
    },
    externals:{
        "systemjs": 'var System',
        "react": 'var React',
        "react-dom": 'var ReactDOM'
    },
    resolve: {
        root: path.resolve(__dirname, "app"),
        extensions: ["", ".js", '.jsx']
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    bail: true
};