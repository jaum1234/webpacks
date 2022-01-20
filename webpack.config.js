const path = require('path');

//Recomendado nomear a contante com o nome do plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app/src/js/app.js',
    output:  {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist') // Garante que o caminho absoluto funcione em qualquer SO
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};