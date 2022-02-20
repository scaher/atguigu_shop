import { reqGetSearchInfo } from "@/api"
// search模块小仓库
const state = {
    searchList:{},
}
const mutations = {
    GETSEARCHINFO(state,searchList){
        state.searchList = searchList
    }
}
const actions = {
    async getSearchInfo(context,params = {}){
        // params形参，当用户派发actions时。第二个参数传递过来的，是一个空对象
        let res = await reqGetSearchInfo(params)
        // console.log("aaaaa");
        if(res.status === 200){
            context.commit('GETSEARCHINFO',res.data)
        }
    }
}
// vuex中的getters主要用于计算属性，在这里能简化数据
const getters = {
    // 里面函数内部有形参，是当前仓库的state
    goodsList(state){
        return state.searchList.data.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.data.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.data.attrsList||[]
    }
    
}
export default {
    state,
    mutations,
    actions,
    getters
}