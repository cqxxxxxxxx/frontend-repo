# frontend-repo

为了学习vue-element-admin以及涉及到的相关技术而搭建的项目

## 前置知识

##### ES语法（ECMAScript ）
http://es6.ruanyifeng.com/#docs/intro

ESMAScript是JavaScript的规格
JavaScript是ESMAScript规格的具体实现


##### Babel（巴别塔，通天塔）
https://babeljs.io/  
https://www.babeljs.cn/docs/index.html 

Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

自己的理解：  
所以我可以使用新的ES语法写代码，然后用Babel编译到低版本的语法，避免部分浏览器不支持新语法。

##### webpack
https://www.webpackjs.com/concepts/  
https://webpack.js.org/concepts/  

本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

自己的理解：  
我们写的js可能会有相互依赖 import(类似java里一个类import依赖另外一个类)，webpack会处理这些依赖，打平这些依赖关系，最终打包成一个或多个bundle

##### vue
https://cn.vuejs.org/v2/guide/

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。



##### vuex
https://vuex.vuejs.org/zh/  

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

自己的理解：  
多个vue组件依赖同一个数据源，此时进行管理比较复杂，可以利用vuex集中管理这个数据源。

##### vue-router
https://router.vuejs.org/zh/ 

Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌

构建单页应用时需要用这个   
多页面应用：每一次页面跳转的时候，后台服务器都会给返回一个新的html文档  
单页面应用：通过ajax跟后端交互，使用js来进行html的更新渲染，适用于前后端分离开发。

##### vue-cli
https://cli.vuejs.org/zh/

vue开发工具，可以快速搭建脚手架

##### axios
https://github.com/axios/axios    
https://segmentfault.com/a/1190000012836882?utm_source=tag-newest#articleHeader4  

代替ajax的一个基于promise语法的http client   
Promise based HTTP client for the browser and node.js

##### element-ui
https://element.eleme.cn/#/zh-CN  
Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库


