### tag和version

tag是一个别名，而非版本号，安装时可以直接通过指定别名的下载别名对应版本的包。



### 主要步骤

- npm login，登录当前源镜像地址的账号，需要先运行命令npm adduser来在当前镜像注册一个账号。（PS：账号注册完后，如果是自己内部的网站，一般需要有对应镜像源网站的管理员赋予相关推送的权限。）

- 初始化一个npm包，npm init，编写自己的代码

- **配置package.json。**主要需要注意的相关几个配置项目为：

  ```json
  "name": "@xxx/ui", //包的名称
  "version": "1.0.80", //包的版本号
  "main": "lib/xxx.cjs.js", // 主入口文件，指的是打包产物dist文件的入口文件
  "module": "es/index.bundle.mjs", // ESModule模块文件的主入口文件
  "browser": "umd/index.umd.js", // main的文件可同时用于node和browser端，而本字段指明仅在browser端使用的入口文件。
  "typings": "es/types/components.d.ts", // 标注类型文件的入口文件
  "style": "umd/xxx.css", // 样式文件入口
  "unpkg": "umd/xxx.js", // unpkg 以 dist/ 为入口的 index.js 文件，非官方字段，悬浮上去没有tip提示，一般用于 cdn 服务
  "jsdelivr": "umd/xxx.js", // 同unpkg
  "files": [ // 指定发布包内的文件，因为默认的发布文件为package.json、license、README和main字段的指定文件
      "json",
      "lib",
      "es",
      "umd",
      "types"
  ]
  ```

- npm publish 包名，发布一个包，如果存在代码更新，则需要更新版本号version，否则无法发布。

- npm unpublish 包名，即可将 npm 上的包删除，但24h内无法再次发布相同名称的包。

  npm unpublish \[@dlz/ui][@1.0.81]；这里区分几种命令类型：

  1. 指定了包名，未指定版本号，则会直接删除指定的包。
  2. 指定了包名和版本号，则会删除指定包的指定版本。
  3. 未指定包名和版本号，则会删除在当前包项目内所配置的指定版本。