import { reqCategoryList,reqBannerList,reqFloorList } from "@/api"
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
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
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        // console.log(result)
        if(result.code === 200){
            commit('FLOORLIST',result.data)
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