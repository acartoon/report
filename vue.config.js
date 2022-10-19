const { defineConfig } = require('@vue/cli-service')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/styles.scss";
            `
      }
    }
  }
  // configureWebpack: {
  //   plugins: [
  //     new HtmlInlineScriptPlugin()
  //   ]
  // }
})

//   plugins: [
//     new VueLoaderPlugin(),
//     new HtmlWebpackPlugin ({
//       template: "./index.html",
//     inject: 'body',
//   }),
//     new HtmlInlineScriptPlugin(),
//   ],