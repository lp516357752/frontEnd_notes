const uglifyWebpackPlugin = require('uglifyjs-webpack-plugin')//压缩js文件的插件
const webpackMerge = require('webpack-merge')//webpack配置文件合并
const baseConfig = require('./base.config')
const cleanBuildBundle = require('clean-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyWebpackPlugin(),//开发时不建议压缩丑化js
    new cleanBuildBundle.CleanWebpackPlugin(),// 每次打包清空出口文件夹
    new BundleAnalyzerPlugin(),//打包时间大小等信息的分析
  ]
})
