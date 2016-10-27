var path = require("path"),
    _ = require('lodash');

var polyfills = {
    'console-polyfill': {
        development: "node_modules/console-polyfill/index.js",
        production: "node_modules/console-polyfill/index.js"
    },
    'es5-shim': {
        development: "node_modules/es5-shim/es5-shim.js",
        production: "node_modules/es5-shim/es5-shim.min.js"
    },
    'es5-sham': {
        development: "node_modules/es5-shim/es5-sham.js",
        production: "node_modules/es5-shim/es5-sham.min.js"
    },
    'es6-promise': {
        development: "node_modules/es6-promise/dist/es6-promise.js",
        production: "node_modules/es6-promise/dist/es6-promise.min.js"
    },
    'respond': {
        development: "node_modules/respond.js/dest/respond.src.js",
        production: "node_modules/respond.js/dest/respond.min.js"
    }
};

module.exports.getPolyfills = function getPolyfills(profile){
    return _.map(polyfills, function (lib, name) {
        return {
            from: lib[profile],
            to: path.join('polyfills', name + '.js')
        };
    })
};

var libs = {
    "systemjs": {
        development: "node_modules/systemjs/dist/system.src.js",
        production: "node_modules/systemjs/dist/system.js"
    },
    "react": {
        development: "node_modules/react/dist/react.js",
        production: "node_modules/react/dist/react.min.js"
    },
    "react-dom": {
        development: "node_modules/react-dom/dist/react-dom.js",
        production: "node_modules/react-dom/dist/react-dom.min.js"
    }
};

module.exports.getLibs = function getLibs(profile){
    return _.map(libs, function (lib, name) {
        return {
            from: lib[profile],
            to: path.join('libs', name + '.js')
        };
    })
};

var index = {
    "index.html": {
        development: "indexDev.html",
        production: "indexProd.html"
    }
};

module.exports.getIndex = function getIndex(profile){
    return _.map(index, function (file, name) {
        return {
            from: file[profile],
            to: name
        };
    })
};

/*module.exports.getOther = function getOther(profile){
    return {
        from: "favicon.ico",
        to: "favicon.ico"
    };
};*/
