const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
        assetModuleFilename: "assets/img/[hash][ext][query]",
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/images/favicon.ico',
        })
    ],
    module: {
        rules: [
            // Правило для обработки изображений
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            // Правило для обработки шрифтов
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
            // Правило для обработки CSS и SCSS
            {
                test: /\.(s[ac]|c)ss$/i,
                oneOf: [
                    // Для модульных CSS файлов (например, form.module.css)
                    {
                        test: /\.module\.(s[ac]|c)ss$/i,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true, // Включение поддержки CSS модулей
                                },
                            },
                            'postcss-loader',
                            'sass-loader',
                        ],
                    },
                    // Для обычных CSS файлов
                    {
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader', // Без `modules`
                            'postcss-loader',
                            'sass-loader',
                        ],
                    },
                ],
            },

            // Правило для обработки JS и JSX файлов
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults", useBuiltIns: "usage", corejs: 3 }],
                            ['@babel/preset-react', { runtime: "automatic" }]
                        ]
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Укажите поддерживаемые расширения
    },
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: [
            {
                context: ["/api", "/auth"], // маршруты для проксирования
                target: "http://localhost:8000",
                changeOrigin: true,
                logLevel: "info"
            }
        ],
    },
};
