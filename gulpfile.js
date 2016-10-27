// gulp configuration file
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var zip = require("gulp-zip");
var path = require("path");
var WebpackDevServer = require("webpack-dev-server");

var webpackConfig = require("./webpack.config.js");
var webpackDevConfig = require("./webpackDevServer.config.js");

var del = require('del');
var PORT = 8080;

// set default task to developer build
gulp.task("default", ["dev-server"]);

gulp.task("clean", function () {
    del(["build", "ermkm-front.zip"]);
});

gulp.task("dev-server", function () {
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(webpackDevConfig), {
        contentBase: path.resolve(__dirname, "build"),
        publicPath: "/",

        stats: {
            colors: true,
            hot: true
        },
        proxy: {
            "*": "http://localhost:9595"
        }
    }).listen(PORT, "localhost", function (err) {
        if (err) throw new gutil.PluginError("dev-server", err);
        gutil.log(`[dev-server]`, `Демо стенд доступен по адресу: http://localhost:${PORT}/`);
        gutil.log(`[dev-server]`, `Демо стенд c hot-module-replacement доступен по адресу: http://localhost:${PORT}/webpack-dev-server/ [/ слеш в конце обязательно]`);
    });
});

//
// production build configuration
//
gulp.task("production", function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("production", err);
        gutil.log("[production]", stats.toString({
            colors: true
        }));
        callback();
    });
});

//
// build distributive
//
gulp.task("dist", ["clean", "production"], function () {
    return gulp.src('build/**')
        .pipe(zip('ermkm-front.zip'))
        .pipe(gulp.dest('.'));
});

//
// selenium build configuration
//
gulp.task("test", function () {
    // todo: complete build script
    console.error("Not implemented yet!");
});