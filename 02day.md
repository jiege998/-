1.编程式路由跳转到当前路由（参数不变），多次执行会抛出NAvigationDuplicated的警告错误？
--路由跳转有两种方式：声明式导航、编程式导航
--声明式导航没有这类问题，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误呢?
   'vue-router':"3.5.3":最新的vue-router引入promise
   function push(){
       return new Promise((reslove,reject)=>{

       })
   }
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前的错误，可以解决(但治标不治本)
   this.$router.push({name:'search,params:{keyword:this.keyword}},()=>{},()=>{})
1.3 this:当前组件实例（search）
    this.$router属性：当前这个属性，属性值vueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
1.4 重写push/replace方法可以解决（治根之本）
    VueRouter.prototype.push=function(location,resolve,reject){
        if(resolve&&reject){
            originPush.call(this,location,resolve,reject)
        }else{
            originPush.call(this,location,()=>{},()=>{})
        }
    }
    VueRouter.prototype.replace=function(location,resolve,reject){
        if(resolve&&reject){
            originReplace.call(this,location,resolve,reject)
        }else{
            originReplace.call(this,location,()=>{},()=>{})
        }
    }