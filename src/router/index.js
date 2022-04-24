import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import Addcartsuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import store from '@/store'
//先把VueRouter原型对象的push,先保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写push|replace
//第一个参数：告诉原来push方法，你往哪里跳（传递哪些参数）
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
 let router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:'/search/:keyword?',
            component:Search,
            name:'search',
            meta:{
                show:false
            },
            name:'search',
            //路由连能不能传递props数据
            //布尔值写法：只能传递params参数
            //props:true
            //对象写法：额外传递一些参数给组件
            //props:{a:1,b:2}
            //函数写法：可以params参数、query参数，通过propps传递给路由组件
            //props:($route)=>{
                  //return {keyword：$route.params.keyword,k:$route.query.k};
            //}
        },
        {
            path:'/register',
            component:Register,
            meta:{
                show:true
            }
        },
        {
            path:'/detail/:skuid',
            component:Detail,
            meta:{
                show:true
            }
        },
        {
            path:'/addcartsuccess',
            name:'addcartsuccess',
            component:Addcartsuccess,
            meta:{
                show:true
            }
        },
        {
            path:'/shopcart',
            name:'shopcart',
            component:ShopCart,
            meta:{
                show:true
            }
        },
        {
             path:'/',
             redirect:'/home'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
      },
})
router.beforeEach(async (to,from,next)=>{
    let name = store.state.user.userInfo.name
    // next()
    if(localStorage.getItem('TOKEN')){
        if(to.path == "/login" || to.path == '/register'){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                try {
                    await store.dispatch('userInfo')
                    next()
                } catch (error) {
                   await store.dispatch('loginOut')
                   next('/login')
                }
              
                
            }
            
        }
        
    }else{
        if(to.path == '/shopcart'){
            next('/login')
        }else{
            next()
        }
       
    }
    
})
export default router;