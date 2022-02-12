// 引入获取三级联动数据的函数
import { reqCategoryList, reqGetBannerList } from "@/api"
// home模块小仓库
const state = {
    // 初始化数据
    categoryList : []
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList.data.slice(0,16)

    }
}
const actions = {
    // 通过api里面的接口函数获取三级联动数据
    // action内部可以执行异步函数
    async categoryList(context){
        let res = await reqCategoryList()
        // console.log('1111',res)
        if(res.status === 200){
            // console.log("1",res,'2',res.data)
            // 向mutation中提交数据
            context.commit("CATEGORYLIST",res.data)
            // console.log(res.data,"=====")
        }
    },
    // 获取首页轮播图的数据
    async getBannerList(){
        let res = await reqGetBannerList()
        // console.log(res);
    }
}


const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}