const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: ["./src/js/index.js"],
    /* entry: {
        index: "./src/js/index.js",
        two: "./src/js/two.js"
    }, */
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new cleanWebpackPlugin(["dist"]),
        new htmlWebpackPlugin({
            title: "Index One",
            favicon: 'favico.ico',
            filename: "index.html",
            template: "index.html"
        }),
        new uglifyJsPlugin()
    ],
    // devtool: "inline-source-map",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|ico)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react"]
                    }
                }
            },
            {
                test: /\.(html|ico)$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react"]
                    }
                }
            }
        ]
    }
}