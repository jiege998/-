// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{
    proxy:{
      "/api": {
        target: "http://39.98.123.211", // 定义被拦截的请求需要访问的真实服务器
        // pathRewrite: { // 通过前缀替换进行地址的重写和定义：去掉/api（因为/api默认会拼接上去）
        //   "^/api": "" // 替换掉以/api开头的，这里用空字符串替换，直接去掉
        // }
    }
    },
    open:true,
    host: 'localhost',
    port: 8080, 
  },
  transpileDependencies: true,
  lintOnSave:false,
}
