import { reqDteailinfo } from "@/api"
const state={
    DetailInfo:{}
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