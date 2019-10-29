const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: './src/css/app.css',
    mode: process.env.NODE_ENV,
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", "postcss-loader",
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/app.css",
            chunkFilename: "app.css"
        })
    ],
};
