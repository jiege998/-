import {getCodeMessage,reqUserRegister,reqUserLogin,reqUserInfo,reqLoginOut} from '@/api/index'
import {setToken,clearToken,getToken} from '@/utils/token'
const state = {
    code:'',
    token:getToken(),
    userInfo:{}
}
const actions = {
  async  getCodeMessage({commit},phone){
    let result = await getCodeMessage(phone)
    if(result.code == 200){
        commit('CODEMESSAGE',result.data)
    }
    },
  async userRegister({commit},data){
      let result = await reqUserRegister(data)
      if(result.code == 200){
          return 'ok'
      }
      else if(result.code == 223){
        return Promise.reject(new Error('手机号已注册'))
      }
      else{
          return Promise.reject(new Error('注册失败'))
      }
  },
  async userLogin({commit},data){
    let result = await reqUserLogin(data)
    if(result.code == 200){
        setToken(result.data.token)
        commit('USERLOGIN',result.data.token)
        return 'ok'
    }
    else{
        return Promise.reject(new Error('登录失败'))
    }
},
async userInfo({commit}){
    let result = await reqUserInfo()
    if(result.code == 200){
        
        commit('USERINFO',result.data)
        return 'ok'
    }  else{
        return Promise.reject(new Error('获取用户信息失败'))
    }
},
async loginOut({commit}){
    let result = await reqLoginOut()
    if(result.code == 200){
        commit('CLEAR')
        return 'ok'
    }else{
        return Promise.reject(new Error('退出失败'))
    }
}
}
const mutations = {
    CODEMESSAGE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        state.token = ''
        state.userInfo={}
        clearToken()
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}