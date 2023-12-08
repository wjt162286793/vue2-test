const globalRouteList = [
    {
        name:'login',
        path:'/login',
        meta:{
            name:'登录',
        },
        component:()=>import('@/pages/login/index.vue')
    },
    {
        name:'notFound',
        path:'/notFound',
        meta:{
            name:'空页面',
        },
        component:()=>import('@/pages/notFound/index.vue')
    },
    {
        redirect:'/login',
        path:'/'
    }
]
export default globalRouteList