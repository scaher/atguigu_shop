import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
// 插件要使用Vue.use()使用

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Search from '@/views/Search.vue'
// 路由组件的引入

// 处理冗余导航bug
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



// 对路由进行配置
const routes = [
  {
    path: "/home",
    component: Home,
    name: "Home",
    // 路由元信息，能够给这个路由配置基础信息，这里存储了footer组件显示与隐藏
    meta: { show: true }
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: { show: false }
  },
  {
    path: "/register",
    component: Register,
    name: "Register",
    meta: { show: false }
  },
  {
    path: "/search/:keyword?",
    // path: "/search",
    component: Search,
    name: "Search",
    meta: { show: true }
  },
  // 对页面进行重定向，定向到home组件
  {
    path: '/',
    // 访问到/主页立即定向到home
    redirect: '/home'
    // component: 
  }

]

const router = new VueRouter({
  routes
})

export default router
