import { reqCategoryList,reqBannerList } from "@/api"
const state={
    categoryList:[],
    bannerList:[],
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
const actions = {
   async categoryList({commit}){
        let result = await reqCategoryList()
        // console.log(result)
        if(result.code === 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqBannerList()
        // console.log(result)
        if(result.code === 200){
            commit('BANNERLIST',result.data)
        }
    }

}
const getters = {}

export default {
    // namespaced:true,
    state,//仓库存储数据的地方
    mutations,//修改state的唯一手段
    actions,//可以书写自己的业务逻辑，也可以处理异步
    getters
}