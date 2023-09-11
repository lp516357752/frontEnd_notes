### 几个关键概念

- compiler
- compilation
- module
- chunk
- bundle

compiler、compilation定义了大量的钩子，用于在后续流程中调用

### 执行过程

1. 初始化：读取和合并配置信息，统计入口文件，解析loader和plugin等信息
2. 编译阶段：编译代码，部分资源使用babel，将文件进行转化成浏览器可识别的代码、开发需要的代码。
3. 输出阶段：生成输出文件，包含文件名、输出路径、资源信息

### 构建阶段

1. 编译模块，通过入口entry的依赖dependence创建module对象，调用对应的loader，将模块转化为对应的js内容，babel将一些内容转化为目标内容。
2. 完成模块编译，产出一个moduleGraph

### 生成阶段

1. 输出资源组装chunk，chunkGroup，再将Chunk转化为一个单独的文件加入到输出列表，加入到输出列表，则表示已经是修改资源内容的最后机会（如hook：afterChunk）。
2. 写入文件系统（emitAssets），确定好输出内容，根据配置写入到输出文件中