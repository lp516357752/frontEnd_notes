#### webpack的exclude

​	对于一些不需要编译或者打包的文件，一般为js文件，可以给webpack配置exclude。如在开发模式中并不需要使用babel-loader相关插件、node_modules和一些已压缩的第三方常见jquery等。

常见于loader的配置中

#### webpack.dll.js动态链接库文件（dllPlugin）

​	webpack5的HardSourceWebpackPlugin。

​	打包一次不需要重复打包的库文件提取出来，如vue、vuex、vue-router等等。类似于webpack.config.js的配置，定义入口文件，出口文件、定义plugins，在其中创建webpack.DllPlugin并配置。

在html中可以通过script来主动引入库文件（后端渲染模板%option%+配置plugins的htmlWebpackPlugin插件）

一般是一个.dll.js模块代码文件，一个json文件，json文件用于保存模块依赖的映射关系，如一些ID、路径等信息

#### 配置静态资源地址CDN

将静态资源等不经常变动的文件放CDN上

#### tree-shaking

摇树，利用ES-module模块化，编译时静态解析模块依赖关系，将不可能运行、不影响输出、无用的、未引用的代码(功能)自动移除。

1、配置sideEffects协助插件确定哪些文件需要保留或删除

2、使用压缩工具如uglyfyJSPlugin、TerserPlugin去压缩代码

3、css也可以压缩无用代码，如PurifyCSS插件

#### splitChunks代码分割

一般打包时，会只生成一个bundle文件，包含了所以的业务和依赖代码，体积大，请求时慢，未充分利用浏览器并行请求能力。

而多页面应用时，也需要考虑多个应用依赖相同库，不处理时产生多个相同的依赖代码，没必要。

可以将公共依赖模块抽离出来，如node_modules中的一些公共库，单独打包并缓存下来。

诸如lodash、jquery

#### Scope Hoisting作⽤域提升

webpack通过ES6语法的静态分析，得到模块的依赖关系，尽可能把模块放到同一个函数中。

如a文件引入了b文件的一些变量或函数，则可以将这些关联代码合并放到同一个请求函数（文件）中通过webpack_require来获取。

#### 开启多线程（涉及loader编译、打包等等）

适用于大型复杂项目，开启多线程需要消耗资源，如果使用不当还可能产生相反的效果

1、如happypack打包，配置js、css等文件的多线程打包配置

2、其他一些多线程插件帮助并行编译vue文件等等