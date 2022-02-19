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
        console.log("aaaaa");
        if(res.status === 200){
            context.commit('GETSEARCHINFO',res.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}