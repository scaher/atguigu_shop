import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// createApp(App).use(Vuex)

// 引入小仓库
import home from './home'
import search from './search'
import login from './login'
import register from './register'

// state,存储数据
const state = {}
// mutations 修改state中的数据
const mutations = {}
// action 书写自己的业务逻辑，可以执行异步
const actions = {}
// getters 可以理解成计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters = {}




// 对外暴露vuex
export default new Vuex.Store({
    // 注册小仓库
    modules:{
        home,
        search,
        login,
        register
    },
    state,
    mutations,
    actions,
    getters
})