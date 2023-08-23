const path = require('path')//node包，获取当前文件的目录
const VueLoaderPlugin = require('vue-loader/lib/plugin')//获取vue-loader的扩展包
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')//打包index.html主文件的插件

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',

    //改变所有涉及url的路径的获取的问题(如打包前后)，会自动在url前加上该路径，当自动打包html文件时，一般不会再需要，因为js跟html同文件
    //publicPath: 'dist/'

  },
  module: {
    //css-loader只负责加载，不负责解析，即加进去的css文件不会在dom生效。
    //style-loader会将模块导出并添加到dom中，实现css模块效果
    rules: [
      {//css
        test: /\.css$/,//匹配css文件
        //使用多个loader时，是从右向左读取数组的。即先css，再style。顺序不对，打包时会出错
        use: [ 'style-loader', 'css-loader' ]//匹配的文件应该使用的loader。
      },
      {//less
        test: /\.less$/,
        use:  ['style-loader', 'css-loader', 'less-loader']
      
      },
      {//url(如通过url加载的图片)
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            //当加载的图片小于该limit值时会把图片编译成base64格式
            //大于时会需要使用file-loader来加载该图片,不需要手动添加，
            //下载了就好
            options: {
              limit: 8192,//kb
              //打包时使用原文件名、附带8位哈希值、附带文件后缀来作为最终打包文件
              name: 'img/[name].[hash:8].[ext]',//打包后的文件名设置
            },
          }
        ]
      },
      {//babel(将es6转es5)
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,//这些文件不会转换
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {//vue
        test: /\.vue$/,
        use: [
          {
            loader:'vue-loader',
          }
        ]
      }
    ]
  },
  resolve: {//解决方案，一般用于处理一些路径问题
    //别名
    alias: {//当引用vue文件时，引用指定的vue的runtime-compiler版本的vue文件
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [//此处可用于在引用文件如：import test from './app.vue' 时可以直接写成'./app'而不用写后缀
      '.vue', '.js'
    ],
  },
  plugins: [//插件扩展
    // 当用到vue-loader时，确信使用了该扩展插件
    new VueLoaderPlugin(),

    //横幅，自动给打包后的文件添加版权归属字样
    new webpack.BannerPlugin('最终版权归\nMr\'Liao\n所有'),
    //打包入口html文件到打包目录
    new htmlWebpackPlugin({
      template: 'index.html'//指定html作为模板打包文件
    }),
  ],
}