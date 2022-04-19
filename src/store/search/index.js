import { reqGetSearchinfo } from "@/api"
const state={
    SearchInfo:[]
}
const mutations = {
    SEARCHINFO(state,SearchInfo){
        state.SearchInfo = SearchInfo
    }
}
const actions = {
  async getSearchInfo({commit},data={}){
        let result = await reqGetSearchinfo(data)
        console.log(result)
        if(result.code === 200){
            commit("SEARCHINFO",result.data)
        }
    }
}
const getters = {
   goodsList(state){
       if(state.SearchInfo.goodsList){
        return state.SearchInfo.goodsList
       }
       return []
    },
   trademarkList(state){
    if(state.SearchInfo.trademarkList){
        return state.SearchInfo.trademarkList
       }
       return []
   },
   attrsList(state){
    if(state.SearchInfo.attrsList){
        return state.SearchInfo.attrsList
       }
       return []
   }
  
}

export default {
    // namespaced:true,
    state,//仓库存储数据的地方
    mutations,//修改state的唯一手段
    actions,//可以书写自己的业务逻辑，也可以处理异步
    getters
}