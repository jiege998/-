import { reqCartList,deleteShopCart,changeIsChecked} from "@/api"
const state={
    CartList:[]
}
const mutations = {
    CARTLIST(state,CartList){
         state.CartList = CartList
    }
}
const actions = {
  async getCartInfo({commit}){
        let result = await reqCartList()
        if(result.code === 200){
            commit("CARTLIST",result.data)
        }
    },
    async deleteShopCart({commit},skuId){
        let result = await deleteShopCart(skuId)
        if(result.code === 200){
           return 'ok'
        }
        else{
            return Promise.reject(new Error('删除失败'))
        }
    },
    async changeIsChecked({commit},{skuId,isChecked}){
        let result = await changeIsChecked(skuId,isChecked)
        if(result.code === 200){
           return 'ok'
        }
        else{
            return Promise.reject(new Error('删除失败'))
        }
    },
    async deleteAllChecked(context){
        let arr = []
        context.getters.cartInfoList.forEach(element => {
            if(element.isChecked == 1){
                let promise = context.dispatch('deleteShopCart',element.skuId)
                arr.push(promise)  
            }
        });
        return Promise.all(arr)
        
        
    },
    checkedAll(context,checkAllId){    
        let arr = []
        context.getters.cartInfoList.forEach(element => {
                let promise = context.dispatch('changeIsChecked',{skuId:element.skuId,isChecked:checkAllId})
                arr.push(promise)  
                
        });
        return Promise.all(arr)
        
        
    },
}
const getters = {
    cartInfoList(state){
        if(state.CartList[0]){
            return state.CartList[0].cartInfoList || {}
        }
       
      }
}

export default {
    // namespaced:true,
    state,//仓库存储数据的地方
    mutations,//修改state的唯一手段
    actions,//可以书写自己的业务逻辑，也可以处理异步
    getters
}