const list = [
    {
        name: 'dashboard',
        path: '/dashboard',
        meta: {
            name: '主页',
        },
        component: () => import('@/pages/dashboard/index.vue'),
        children: [
            {
                name: 'communication',
                path: '/dashboard/communication',
                meta: {
                    name: '组件通信',
                    icon: 'el-icon-phone'
                },
                component: () => import('@/pages/communication/index.vue')
            },
            {
                name: 'instructions',
                path: '/dashboard/instructions',
                meta: {
                    name: '指令',
                    icon: 'el-icon-thumb'
                },
                component: () => import('@/pages/instructions/index.vue')
            },
            {
                name: 'life',
                path: '/dashboard/life',
                meta: {
                    name: '生命周期',
                    icon: 'el-icon-time'
                },
                component: () => import('@/pages/life/index.vue')
            },
            {
                name: 'envMode',
                path: '/dashboard/envMode',
                meta: {
                    name: '环境模块',
                    icon: 'el-icon-question'
                },
                component: () => import('@/pages/envMode/index.vue')
            },
            {
                name: 'extendAndMixin',
                path: '/dashboard/extendAndMixin',
                meta: {
                    name: '继承与混入',
                    icon: 'el-icon-goods'
                },
                component: () => import('@/pages/extendAndMixin/index.vue')
            },
            {
                name: 'flowChart',
                path: '/dashboard/flowChart',
                meta: {
                    name: '流程图',
                    icon: 'el-icon-sort'
                },
                component: () => import('@/pages/flowChart/index.vue')
            },
            {
                name: 'common',
                path: '/dashboard/common',
                meta: {
                    name: '普通用户页面',
                    icon: 'el-icon-user'
                },
                component: () => import('@/pages/common/index.vue')
            },

            {
                name: 'admin',
                path: '/dashboard/admin',
                meta: {
                    name: '管理员页面',
                    icon: 'el-icon-s-custom'
                },
                component: () => import('@/pages/admin/index.vue')
            },

        ]
    },

]
export default list