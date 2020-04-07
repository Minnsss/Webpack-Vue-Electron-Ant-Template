# 搭建Webpack+Electron+Vue工程模板的方法和步骤

authtor: szm  
date: 2020-04-05
## 初始化工程文件夹
在本地工程文件夹scats-builder新建inst-desc目录  
在inst-desc目录下打开vscode  
执行`npm init`命令

## 构建工程目录
工程目录结构如下 
``` 
|——app  // webpack编译整个项目后的代码，包括主进程和渲染进程
|——builder  // webpack配置文件 
|   |——webpack.main.config.js   // webpack主进程配置文件
|   |——webpack.renderer.config.js   // webpack渲染进程配置文件
|   |——devServerConfig.js   // webpack dev server配置文件
|——config   // 其他环境配置文件
|   |——compress.js  //
|   |——version.js   //
|——doc  // 开发文档  
|——node-modules  
|——pack // electron-builder后的安装包
|——public   // 静态资源，图标等  
|——src  // 工程源代码   
|   |——main // 主进程
|   |   |——index.js // electron的窗口文件
|   |   |——main.js  //
|   |——renderder    // 渲染进程
|   |   |——views
|   |   |——components 
|   |   |——index.ejs    // html模板
|   |   |——index.js
|   |——assets   // 资源
|   |   |——plugins  //插件
|   |   |   |——ant-components.js    // 配置ant-design-vue动态加载
|——babel.config.js  // babel的配置文件  
|——postcsss.config.js   // css预加载配置文件
|——vue.config.js    // vue的配置文件
|——package.json
```

## 安装electron
由于脚手架的vue-electron版本过低，且不方便升级electron。故直接选择工程安装electron
执行`cnpm i electron --save-dev`

## 安装webpack和配置

## 安装Vue

## 配置babel

## 安装ant-design-vue

## 执行electron打包
