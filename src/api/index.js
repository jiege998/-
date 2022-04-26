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

export const reqAddOrUpdateShopCart= (skuId,skuNum)=> request({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:"POST"
})

export const reqCartList= ()=> request({
    url:'/cart/cartList',
})
export const deleteShopCart= (skuId)=> request({
    url:`/cart/deleteCart/${skuId}`,
    method:"DELETE"
})

export const changeIsChecked= (skuId,isChecked)=> request({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
})

export const getCodeMessage= (phone)=> request({
    url:`/user/passport/sendCode/${phone}`,
})

export const reqUserRegister= (data)=> request.post(
    '/user/passport/register',
    data
)

export const reqUserLogin= (data)=> request.post(
    '/user/passport/login',
    data
)
export const reqUserInfo= ()=> request.get(
    '/user/passport/auth/getUserInfo',

)

export const reqLoginOut= ()=> request.get(
    '/user/passport/logout',

)

export const reqAddressInfo = ()=> request.get(
    '/user/userAddress/auth/findUserAddressList',

)

export const reqOrderInfo = ()=> request.get(
    '/order/auth/trade',

)
//提交订单的接口/api/order/auth/submitOrder?tradeNo={tradeNo
export const reqSubmitOrder=(tradeNo,data)=>request.post(
    `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data
)
//获取支付信息
export const reqPayInfo=(orderId)=>request.get(
    `/payment/weixin/createNative/${orderId}`,
)
//获取支付订单状态
export const reqPayStatus=(orderId)=>request.get(
    `/payment/weixin/queryPayStatus/${orderId}`,
)
//获取订单列表/order/auth/{page}/{limit}
export const reqMyOrderList=(page,limit)=>request.get(
    `/order/auth/${page}/${limit}`,
)
    