import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import store from '@/store'
//引入swiper样式
import 'swiper/css/swiper.css'
import Carsousel from '@/components/Carsousel'
import Pagination from '@/components/Pagination'
//引入mock数据
import '@/mock/mockServe'
//图片懒加载
import loading from '@/assets/images/loading.gif'
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
  loading
})
import '@/plugins/validate'
// import {reqCategoryList} from '@/api/index'
// reqCategoryList()
// console.log(reqCategoryList())
//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Carsousel.name,Carsousel)

//统一接收api文件夹里面全部请求函数
import * as API from '@/api'

import { Button,MessageBox} from 'element-ui';
Vue.component(Button.name, Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: h => h(App),
  router,
  //组件实例对象的身上会多了一个属性$store
  store,
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
}).$mount('#app')
