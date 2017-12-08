# 前言

之前我的网站集结了angular学到的用到的知识点，放在coding上了，总觉得有点乱，趁此机会，迁移到github上，从头搭建下，本来想用gulp，看了下angular官网，决定用angular脚手架angular-cli，原因就是不想重复工作嘞，用gulp的话，下次再做一个项目，又要写ES6、sass、类似的gulp文件，这时候发现gulp脚本也成了重复性工作。

*angular-cli* 命令行界面工具
可以创建项目、添加文件以及执行一堆开发任务，如测试、打包和发布。
一个命令，目录结构、gulp脚本、babel配置、空的测试文件都搞定，直接写核心业务代码，超级强大。

当然很多前端框架比如vue、angular、ember都有自己的脚手架工具(一般命名XX-cli)。

__注：此项目是我多年经验，如有不足请多多斧正，如能帮到你是我的荣幸。__


## 技术栈
angualr + angular-cli + tslint


### 构建项目

```
npm install -g @angular/cli; (node >= 6.9.x and npm >= 3.x.x) // 设置开发环境

ng new angular-topic; // 创建新项目及应用的骨架代码(包括安装npm包)

cd angular-topic;ng serve --open; // 启动开发服务器(ng serve 监听文件变化，并在修改时重新构建此应用)

```


#### 功能

- [x] TODO Add...


#### 知识点


##### 项目文件概览
//应用代码位于src文件夹中。
//所有的angular组件、模板、样式、图片以及应用所需的任何东西。
//文件夹之外的文件都是为构建应用提供支持用(构建、测试、维护、文档化、发布应用)。

```
.
angular-topic
├── e2e                 //端到端end-to-end测试，和应用相互独立，
├── node_modules        //package.json
├── .angular-cli.json   //angular-cli配置文件
├── .editorconfig       //给编辑器看的一个简单配置文件
├── .gitignore          //git配置文件
├── karma.conf.js       //给karma的单元测试配置，运行 ng test 会用到
├── package.json        //npm配置文件
├── protractor.conf.js  //给protractor使用的端到端测试配置文件，运行 ng e2e会用到
├── README.md           //项目的基础文档
├── tsconfig.json       //typescript编译器的配置
├── tslint.json         //给TSLint 和 Codelyzer 用的配置信息，运行 ng lint会用到
├──src
│   ├── app
│   │   ├── app.component.css      //CSS样式
│   │   ├── app.component.html     //HTML模板
│   │   ├── app.component.spec.ts  //定义 AppComponent 组件
│   │   ├── app.component.ts       //定义 AppComponent 组件
│   │   └── app.module.ts          //定义 AppModule，会告诉angular如何组装该应用
│   ├── assets       //图片等
│   │   └── .gitkeep
│   ├── environments //包括各个目标环境，导出了一些应用中要用到的配置变量，甚至使用模拟服务
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico  //图标，放于书签中
│   ├── index.html   //访问网站看到的主页面的HTML文件，cli会自动添加所有js、css文件
│   ├── main.ts      //应用的主要入口
│   ├── polyfills.ts //不同浏览器对web标准的支持程度不同，填充库帮助把这些不同点标准化
│   ├── styles.css   //全局样式
│   ├── test.ts      //单元测试主要入口，不需要编辑里面任何东西
│   ├── tsconfig.app.json     //typescript编译器的配置文件，为angular应用准备
└   └── tsconfig.spec.json    //typescript编译器的配置文件，为单元测试准备
.
```
