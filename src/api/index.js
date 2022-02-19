// 当前这个模块api进行统一管理,这种写法比上一个项目中在组件中配置api要高明得多
// import { request } from 'http'
import requests from './request'
import mockRequest from './mockRequest'

// 三级联动接口配置
export const reqCategoryList = () => {
    // 发请求
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取banner（轮播图接口）  从mock中获取
export const reqGetBannerList = () => mockRequest.get('/banner')

// 获取floor数据  从mock中获取
export const reqGetFloorList = () => mockRequest.get('/floor')

// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({
    url:'/list',
    method: 'post',
    data:params
})