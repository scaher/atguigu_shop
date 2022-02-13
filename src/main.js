import Vue from 'vue'
import { reqCategoryList } from './api'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'


// 三级联动组件，注册为全局组件
import TypeNav from './components/TypeNav'

// 引入mock  数据
import './mock/mockServer'

// 引入轮播图样式
import 'swiper/css/swiper.css'


console.log(reqCategoryList())
// 
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // 注册仓库，组件实例对象中会出现一个$store的属性
  store,

}).$mount('#app')
// 将路由组件的引入通过钩子挂载到app组件中

// createApp(App).use(store).use(router).mount('#app')
