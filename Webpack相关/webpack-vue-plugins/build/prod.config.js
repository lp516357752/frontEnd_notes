const uglifyWebpackPlugin = require('uglifyjs-webpack-plugin')//压缩js文件的插件
const webpackMerge = require('webpack-merge')//webpack配置文件合并
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyWebpackPlugin(),//开发时不建议压缩丑化js
  ]
})
