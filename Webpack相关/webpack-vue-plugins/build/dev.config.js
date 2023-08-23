const webpackMerge = require('webpack-merge')//webpack配置文件合并
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer: {//本地服务器搭载
    contentBase: './dist',//指定提供服务器的文件夹
    inline: true,//是否热更新
  }
})



