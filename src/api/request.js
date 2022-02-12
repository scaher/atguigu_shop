// 这里是向真实服务器发请求

// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
// 创建一个axios实例（里面是axios实例的配置）
const requests = axios.create({
    // 配置对象
    // 在请求路径上添加基础的url，这样写路径就不用写/api
    baseURL:"/api",
    // 请求超时时间5s
    timeout:5000,

})
// 请求拦截器，请求发出去之前可以执行一些功能
// interceptors是拦截器的意思，在发送网络请求前拦截并执行代码
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start()


    // config 是配置对象，里面有个属性 header请求头
    return config

})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功回调
    // 进度条结束
    nprogress.done()
    return res
},(err)=>{
    // 失败回调
    return Promise.reject(new Error('失败'))
})



// 对外暴露
export default requests