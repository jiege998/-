export const setToken = (token)=>{
    localStorage.setItem('TOKEN',token)
}

export const clearToken = ()=>{
    localStorage.clear('TOKEN')
}

export const getToken = ()=>{
   return localStorage.getItem('TOKEN')
}