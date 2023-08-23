const path = require('path')//node包，获取当前文件的目录

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',

    //改变所有涉及url的路径的获取的问题(如打包前后)，会自动在url前加上该路径
    publicPath: 'dist/'

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
      }
    ]
  }
}