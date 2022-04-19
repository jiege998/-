//API进行统一管理
import { request } from "./request";
import {mockRequest} from './mockRequest'
//三级联动的接口
export const reqCategoryList= ()=> request({ url:'/product/getBaseCategoryList'})
export const reqBannerList = ()=> mockRequest({url:'/banner'})
export const reqFloorList = ()=> mockRequest({url:'/floor'})
