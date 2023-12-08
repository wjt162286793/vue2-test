const userMode = {
    state:()=>({
        userInfo:{
            name:'wjt',
            age:28
        },
        userRole:[],
        asyncRouteList:[]
    }),
    mutations:{
        CHANGE_USEINFO:(state,info)=>{
            state.userInfo = info
        },
        CHANGE_USERROLE:(state,info)=>{
            state.userRole = info
        },
        CHANGE_ASYNCROUTELIST:(state,info)=>{
            state.asyncRouteList = info
        }
    },
    actions:{
        changeUserInfo:(({commit},data)=>{
            commit('CHANGE_USEINFO',data)
        }),
        changeUserRole:(({commit},data)=>{
            commit('CHANGE_USERROLE',data)
        }),
        changeAsyncRouteList:(({commit},data)=>{
            commit('CHANGE_ASYNCROUTELIST',data)
        })
    }
}
export default userMode