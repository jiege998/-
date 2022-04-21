//API进行统一管理
import { request } from "./request";
import {mockRequest} from './mockRequest'
//三级联动的接口
export const reqCategoryList= ()=> request({ url:'/product/getBaseCategoryList'})
export const reqBannerList = ()=> mockRequest({url:'/banner'})
export const reqFloorList = ()=> mockRequest({url:'/floor'})

// export const reqGetSearchinfo= (data)=> request.post( '/list',data)
export const reqGetSearchinfo= (data)=> request({
    url:'/list',
    method:'POST',
    data
})

export const reqDteailinfo= (skuid)=> request({
    url:`/item/${skuid}`,
})