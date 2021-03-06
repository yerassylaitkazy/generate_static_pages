const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        pageOne: "./src/pages/pageOne/index.js",
        pageTwo: "./src/pages/pageTwo/index.js",
        pageThree: "./src/pages/pageThree/index.js"
    },
    output: {
        filename: '[name]/build.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/pages/pageOne/index.html',
            filename: 'pageOne.html',
            chunks: ['pageOne']
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/pageTwo/index.html',
            filename: 'pageTwo.html',
            chunks: ['pageTwo']
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/pageThree/index.html',
            filename: 'pageThree.html',
            chunks: ['pageThree']
        }),
    ],
    devServer: {
        port: 3000,
        compress: true
    },
}