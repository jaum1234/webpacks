const path = require('path');

//Recomendado nomear a constante com o nome do plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/src/js/app.js',
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'), // Garante que o caminho absoluto funcione em qualquer SO
        clean: true,
    },
    module: {
        rules:  [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
        //new CopyWebpackPlugin({
        //    patterns: [
        //        { from: './app/src/css', to: 'css' }
        //    ]
        //})
    ],
};