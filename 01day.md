1:vue-cli 脚手架初始化项目
node + wbpack + 淘宝镜像

 node_modules文件夹：项目依赖文件夹
 public 文件夹：一般放置一些静态资源，须注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。
 src文件夹（程序员源代码文件夹）：
   assets文件夹：一般也是放置静态资源（一般放置多个组件公用的静态资源），需注意，放置在assets文件夹里面静态资源，在wenpack打包的时候，webpack会把静态资源当成一个模块，打包到js文件里面

   components:一般放置的是非路由组件
   App:唯一的根组件，Vue当中的组件
   mian.js：程序入口文件，也是整个程序当中最先执行的文件

Babel.config.js:配置文件（babel相关）
package.json：认为项目”身份证“，记录项目叫做什么，项目当中有哪些依赖，怎么运行。
package-lock.json:缓存性文件

README.md:说明文件


2.项目的其他配置
    2.1项目运行起来的时候，让浏览器自动打开
    ---package.json 配置
    "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
    2.2 关闭eslint检查
    ----在根目录下建立vue.config.js文件
        const { defineConfig } = require('@vue/cli-service')
        module.exports = defineConfig({
        transpileDependencies: true,
        lintOnSave:false
        })
    2.3src文件夹简写方法，配置别名@
    jsconfig.json配置别名@提示【@代表src文件夹】
        {
        "compilerOptions": {
            "target": "es5",
            "module": "esnext",
            "baseUrl": "./",
            "moduleResolution": "node",
            "paths": {
            "@/*": [
                "src/*"
            ]
            },
            "lib": [
            "esnext",
            "dom",
            "dom.iterable",
            "scripthost"
            ]
        },
        "exclude":[
            "node-modules",
            "dist"
        ],
        }
3.项目路由分析
    前端所谓路由：kv键值对
    key:URL(地址栏中的路径)
    value:相应的路由组件
    注意：项目上中下结构

    路由组件：
    Home路由组件，Search路由组件,Login登录路由组件,Refister路由组件
    非路由组件：
    Header,Footer【在首页、搜索页】
4.完成非路由组件Header与Footer业务
    在项目中，不以HTML+css为主，主要搞业务、逻辑
5.路由跳转的方式：声明式导航：router-link
                 编程式导航：push/replace