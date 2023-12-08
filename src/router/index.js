import Vue from 'vue'
import Router from 'vue-router'
import asyncRouteList from './asyncRouteList'
import globalRouteList from './globalRouteList'
import store from '@/store/index'
import {getUserRoleFun} from '@/globalFun/index'
import { cloneDeep } from 'lodash'

const RouteList = [].concat(globalRouteList)
let initAsyncList = cloneDeep(asyncRouteList)
Vue.use(Router)

const router = new Router({
    routes:RouteList,
    mode:'history'
})
if(localStorage.getItem('vue2_userInfo')){
    store.dispatch('changeUserInfo',JSON.parse(localStorage.getItem('vue2_userInfo')))
}

//根据后台返回权限字段匹配路由
function addAsyncRouterFun(roleInfo){
    let filerOverList = []
    filterRouteFun(initAsyncList[0].children,roleInfo,filerOverList)
    let allAsyncRouteList = asyncRouteList[0]
    allAsyncRouteList.children = filerOverList    
    router.options.routes = [].concat(globalRouteList)
    router.addRoutes([allAsyncRouteList])   //动态添加路由
    router.options.routes.push(allAsyncRouteList)  //给$router的options添加权限路由
    store.dispatch('changeAsyncRouteList',allAsyncRouteList.children)
}

//递归匹配多级路由
function filterRouteFun(initAsyncList,roleInfo,filerOverList){
    initAsyncList.forEach(item=>{
    if(roleInfo.includes(item.name)){
        let RouteItem = cloneDeep(item)
        if(RouteItem.children){
         RouteItem.children = []
         filterRouteFun(item.children,roleInfo,RouteItem.children)
        }
        filerOverList.push(RouteItem)
    }
   })
}

router.beforeEach(async(to,from,next)=>{
    let token = localStorage.getItem('vue2_token')
    if(token){
        let roleList = store.state.user.userRole
        //没有权限数据
        if(roleList.length<1){
            let role = await getUserRoleFun(store.state.user.userInfo.userName)  //请求权限数据
            store.dispatch('changeUserRole',role) 
            addAsyncRouterFun(role)  //根据权限字段值过滤符合添加的路由配置项
            next({...to,replace:true}) //重新访问,走一遍前置守卫
        }else{
            if(to.path === '/login'){
                next('/dashboard')
            }else{
                next()
            }
        }

    }else{
        if(to.path === '/login'){
            next()
        }else{
            next('/login')
        }
    }
})

export default router