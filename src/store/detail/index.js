import { reqDteailinfo,reqAddOrUpdateShopCart } from "@/api"
import {getUUID} from '@/utils/uuid_token'
const state={
    DetailInfo:{},
    uuid_token:getUUID()
}
const mutations = {
    DETAILINFO(state,DetailInfo){
        state.DetailInfo = DetailInfo
    }
}
const actions = {
    async getDtailInfo({commit},skuid){
        let result = await reqDteailinfo(skuid)
        if(result.code == 200){
            commit('DETAILINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code == 200) return 'ok'
        else{
            return Promise.reject(new Error('添加失败'))
        }
    }

}
const getters = {
    categoryView(state){  
            return state.DetailInfo.categoryView || {}    
    },
    skuInfo(state){
        return state.DetailInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.DetailInfo.spuSaleAttrList || []
    }
}

export default {
    // namespaced:true,
    state,//仓库存储数据的地方
    mutations,//修改state的唯一手段
    actions,//可以书写自己的业务逻辑，也可以处理异步
    getters
}