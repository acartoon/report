const { defineConfig } = require('@vue/cli-service')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        extract: false,
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Еженедельный отчет заявок и предложений',
        },
    },
    configureWebpack: (config) => {
        if (config.mode === 'production') {
            config.plugins = [
                ...config.plugins,
                new HtmlInlineScriptPlugin(),
                new HtmlWebpackPlugin({
                    template: './public/index.html',
                    filename: 'report.html',
                    inject: 'body',
                }),
            ]
        }
    },
})
