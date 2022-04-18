import { reqCategoryList } from "@/api"
const state={
    categoryList:[]
}
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
const actions = {
   async categoryList({commit}){
        let result = await reqCategoryList()
        // console.log(result)
        if(result.code === 200){
            commit('CATEGORYLIST',result.data)
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