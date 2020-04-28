# 搭建Webpack+Electron+Vue工程模板的方法和步骤

author: szm  
date: 2020-04-05
搭建方法参照`从零开始搭建Electron+Vue+Webpack项目框架（一）Electron demo`
参考github地址：`https://github.com/luohao8023/electron-vue-template`

## 1. 初始化工程文件夹
在本地工程文件夹scats-builder新建inst-desc目录  
在inst-desc目录下打开vscode  
执行`npm init`命令
没有特殊说明，本项目一般采用`--save-dev`安装方式

## 2. 构建工程目录
工程目录结构如下 
``` 
|——app  // webpack编译整个项目后的代码，包括主进程和渲染进程
|——builder  // webpack配置 
|   |——webpack.main.config.js
|   |——webpack.renderer.config.js
|   |——webpack.devServer.config.js
|——config   // 其他配置
|   |——compress.js
|   |——version.js
|——doc  // 开发文档  
|——node-modules  
|——pack // electron-builder后的安装包
|——public 
|——src  // 工程源代码   
|   |——main
|   |   |——libs // 
|   |   |——windows
|   |   |   |——index.js // electron的渲染进程的窗口配置文件
|   |   |——main.js  // 对外暴露的electron方法
|   |——renderder
|   |   |——assets
|   |   |   |——images
|   |   |   |——plugins
|   |   |   |   |——ant-components.js    // 配置ant-design-vue动态加载
|   |   |   |——styles
|   |   |——components
|   |   |——utiles
|   |   |——views 
|   |   |——index.ejs    // html模板
|   |   |——index.js
|——babel.config.js  
|——postcsss.config.js
|——vue.config.js
|——package.json
```

## 3. 安装electron
由于脚手架的vue-electron版本过低，且不方便升级electron。故直接选择工程安装electron
执行`cnpm i electron --save-dev` 全局安装会有版本冲突的问题

## 4. 安装webpack和配置
安装方式：`--save-dev`
需要安装 
webpack 
webpack-cli 
webpack-dev-server 
webpack-hot-middleware

本项目使用的webpack版本为4.x

### webpack简单介绍
mode：环境参数，针对不同的环境，webpack内部有一些不同的机制，并对相应环境做相应的优化

`mode: process.env.NODE_ENV` 、一般为`production`和`development`

entry：入口，webpack执行构建的第一步将从入口文件开始，递归查询并解析所有依赖的模块。配置方式有多种，可参考webpack文档。
本项目配置的路径是`./src/renderer/index.js`，意思是src目录下，renderer文件夹下的index.js，
而webpack配置文件是在builder文件夹下

注意：那这个`./`的相对路径到底是相对于where?
这就得说一下webpack中的路径问题了，context 是 webpack 编译时的基础目录，入口起点（entry）会相对于此目录查找，那这个context又是个什么东西？webpack源码有关默认配置中有这么一句话
`this.set("context", process.cwd());`
这就是context的默认值，工程的根目录，那这个entry的配置就很好理解了。

如果配置多个页面打包，就可以在entry写多个入口，见后文。

output：打包后的js，路径建议设置为绝对路径。

loaders：一些加载器，预处理文件
本项目采用的loader包括 less-loader css-loader style-loader file-loader url-loader babel-loader vue-loader

plugins：插件，针对某种特定类型的文件进行处理。后处理文件
本项目采用的plugin包括 VueLoaderPlugin HtmlWebpackPlugin

本项目将webpack配置抽分成3个配置文件，分别为
`webpack.main.config.js` 
`webpack.renderer.config.js` 
`webpack.devServer.config.js`

 另一种配置思路是将生产环境和开发环境区分开，既有3个配置文件，分别为
 `webpack.base.js` 开发环境和生产环境中通用的配置集中放在这里
`webpack.dev.config.js` 用于开发环境的 Webpack 配置，继承自 base
`webpack.config.js`用于生产环境的 webpack 配置，同样继承自 base

### devServer配置
使用`webpack-dev-server`
需要配置url和port，防止端口占用的情况，易于修改和调试多个工程
配置热更新

### 运行脚本代码
直接见代码

## 5. 安装Vue

vue vuex vue-router vue-loader

## 6. 配置babel
配置babel比较麻烦，简单就是有些浏览器不懂es5+的语法，需要通过babel进行转译,让低端浏览器也能认识并执行
注意：babel的依赖包太多，每个包用的依据版本很乱

本项目用的babel依赖包包括    
```
"@babel/core": "7.9.0",
"@babel/plugin-proposal-class-properties": "7.8.3",
"@babel/plugin-transform-runtime": "7.9.0",
"@babel/preset-env": "7.9.0",
"babel-loader": "8.1.0",
"babel-plugin-import": "1.13.0",
```

## 7. 配置less
less扩展了css的语法，增加了变量 函数 mixin等

## 8. 安装ant-design-vue
antd是蚂蚁金服开发的一套基于react的ui组件，后来ant-design-vue是社区共同维护的基于vue的ui组件。
本项目安装的ant-design-vue是1.5的版本

### 配置按需加载
抽取配置，单独写了一个ant-componment.js，用于集中配置项目所需的ant组件

### 改颜色主题
本项目使用less的语法，故需要提前配置less，参照前文。
需要改webpack的配置的modules和vue.config.js

## 9. 执行electron打包

### electron-builder配置
本项目的打包工具采用electron-builder，在package.json配置
### 打包
electron-builder的某些依赖包需要手动下载（有个包需要梯子）,在终端的消息找下载地址（github的），通过下载器下载后放在本地。
针对Win平台：
electron：electron-vx.x.x-winxx-xx.zip
`C:\Users\minnsss\AppData\Local\electron\Cache\`
nsis：nsis-resources-xxx.zip 处理资源打包加密，可配置是否加密
`C:\Users\<用户名>\AppData\Local\electron-builder\cache\nsis\`
winCodeSign：
`C:\Users\<用户名>\AppData\Local\electron-builder\cache\winCodeSign\`

注意：
每次执行build，都会去根据electron版本去npm下载包，npm很慢，建议在package.json固定electron和electron-builder的版本，这样只需要一次把相关的版本下载放本地，以后就不需要build的时候npm了。
本项目package.json固定了electron的版本。（~/^/不带符号的区别）

如果不固定的话，就要修改.npmrc文件，设置镜像（好像不太好用）


## 10. webpack+ejs 多个页面打包的配置

### 简单粗暴
`webpack.renderer.config.js`里面编辑：
 `entry`里面写每个页面的入口js
```
    entry: {
        home: [ './src/renderer/index.js'],
        uut: ['./src/renderer/ejs/uut/index.js']
    },
```
`plugins`里面`new HtmlWebpackPlugin`
```
    new HtmlWebpackPlugin({
        template: './src/renderer/index.ejs',
        filename: './index.html',
        title: 'scats-home',
        inject: false,
        hash: true,
        mode: devMode,
        chunks: ['home']
    }),
    new HtmlWebpackPlugin({
        template: './src/renderer/ejs/uut/index_UUT_ATPAC_2009.ejs',
        filename: './index_UUT_ATPAC_2009.html',
        title: 'scats-uut',
        inject: false,
        hash: true,
        mode: devMode,
        chunks: ['uut']
    }),
```

注意`chunks`：

### 写循环
`new HtmlWebpackPlugin`用循环处理，暂时没实现

## 11. electron的进一步配置

### 多窗口处理
#### 混合
txf写法

#### 每个页面单独编写配置
清理主进程文件main.js，提取窗口配置文件：
之前我们是把创建窗口以及窗口配置都放在了main.js中，这样会让我们的主进程看起来很乱，掺杂了各种配置、各方面的代码，而且一旦我们的项目稍微复杂一些，比如同时维护多个窗口，或者有很多针对某个窗口的事件监听等。这里所说的一个个窗口其实就是electron的渲染进程，不同的渲染进程由主进程来统一维护和调度。把渲染进程提取为单独的配置文件，对外只暴露方法，这样就能简化主进程代码，也让我们的项目结构更清晰、更合理。
每个页面单独写各自的配置文件，调用在`main.js`里面调用
如：
home窗口的配置在`index.js`，uut窗口的配置在`uut.js`；
好处：
方便项目集成。

### 添加控制台快捷方式

开发者工具不是默认打开的，调试代码过程中最好一开始就打开控制台

### 还没有解决的：
1. 多窗口
http协议加载的时候 没有加载成功

file协议加载的时候 又不是开发环境，不能热更新

