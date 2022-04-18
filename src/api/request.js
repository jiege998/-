//对于axios进行二次封装
import axios from "axios";
//进度条
import nprogress from "nprogress";
//对外暴露
export const request = axios.create({
    baseURL:'/api',
    timeout:5000,
})
//请求拦截器
request.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})
//响应拦截器
request.interceptors.response.use((res)=>{
    nprogress.done()
    // console.log(res.data.data)
    return res.data

},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('请求失败'+error))
})