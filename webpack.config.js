var webpack = require('webpack');
var path = require('path');
const fs = require('fs');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Return all the entries from layouts and components folder
function getAllEntries() {
    var entries = {};
    Object.assign(entries, generateEntries(path.join(__dirname, "src/components")));
    return entries;
};

// Return entries for the input folder
function generateEntries(viewsFolder) {
    return fs.readdirSync(viewsFolder)
        .map((file) => {
            var stats = fs.lstatSync(viewsFolder + '/' + file);
            if (stats.isDirectory()) {
                return {
                    name: file + '.package.min',
                    path: viewsFolder + '/' + file + '/' + file + '.module'
                }
            }
        }).reduce((memo, file) => {
            memo[file.name] = [file.path];
            return memo;
        }, {});
};

// Get Plugins
function getPlugins(env) {
    
    // env is set in npm run build
    var isProd = env === "production" ? true : false;

    var plugins = [];

    if (isProd) {
        plugins.push(new CleanWebpackPlugin(['dist/*.*']));
    }
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    plugins.push(new UnminifiedWebpackPlugin());

    return plugins;
}

module.exports = env => {
    return {
        entry: getAllEntries(),
        resolve: {
            extensions: [".ts"]
        },
        output: {
            path: path.join(__dirname, "dist"),
            filename: '[name].js',
            libraryTarget: 'this'
        },
        module: {
            loaders: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'angular-templatecache-loader?module=dms-package-tpls'
                },
                {
                    test: /\.css$/,
                    loader: [
                        "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.png$/,
                    loader: "url-loader?limit=1000000"
                }
            ]
        },
        plugins: getPlugins(env)
    }
};
