import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import store from '@/store'
//引入swiper样式
import 'swiper/css/swiper.css'
//引入mock数据
import '@/mock/mockServe'
// import {reqCategoryList} from '@/api/index'
// reqCategoryList()
// console.log(reqCategoryList())
//注册全局组件
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
  //组件实例对象的身上会多了一个属性$store
  store
}).$mount('#app')
