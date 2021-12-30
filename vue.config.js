'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 9527,
    open: true,
    proxy: {
      // logLevel: "debug",
      // /api 自定义服务代理名字
      '/api': {
        target: 'https://mock.presstime.cn/mock/61c2ff3990bfb20016179405/example', // 代理帮助你请求的具体服务
        changeOrign: true, // 开启代理
        secure: false, //https请求需要这个参数
        pathRewrite: {
          // 格式化path
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
