const modoDev= process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const UglifyJsPlugin = require('uglify.js-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optmize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename:'principal.js',
        path: __dirname + './public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
    optimization: {
        minimizer: [
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader',  // interpretar @import, url()...
                'sass-loader',
                
            ]   
        }]
    }
}