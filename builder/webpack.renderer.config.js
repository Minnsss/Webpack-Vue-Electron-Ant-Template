/*
Name:   渲染进程配置
Author: szm
Date:   2020-04-05
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {
        main: './src/renderer/index.js'
    },
    output: {
        path: path.join(__dirname, '../app/'),
        publicPath: devMode ? '/' : '',
        filename: './js/[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-bundle.[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '@': path.resolve(__dirname, "../src"),
            '@config': path.resolve(__dirname, "../config")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/renderer/index.ejs',
            filename: './index.html',
            title: 'electron-vue-template',
            inject: false,
            hash: true,
            mode: devMode
        }),
        new VueLoaderPlugin()
    ],
    target: 'electron-renderer'
}