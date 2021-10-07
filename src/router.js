import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: 'index'
        },
        {
            path: '/index',
            name: 'Index',
            component: () => import('./views/Index.vue'),
            meta: {title: '首页'},
            redirect: '/binarySearch',
            children: [
                {
                    path: '/binarySearch',
                    name: '二分查找',
                    icon: 'search',
                    isRoot: true
                },
                {
                    path: '/704binarySearch',
                    name: '704二分查找',
                    component: () => import('./views/BinarySearch/BinarySearch')
                },
                {
                    path: '/004findMedianSortedArrays',
                    name: '004找两个正序数组的中位数',
                    component: () => import('./views/BinarySearch/FindMedianSortedArrays')
                },
                {
                    path: '/033findRotationSortedArrays',
                    name: '033搜索旋转排序数组',
                    component: () => import('./views/BinarySearch/FindRotationSortedArrays')
                },
                {
                    path: '/linkedList',
                    name: '链表',
                    icon: 'link',
                    isRoot: true
                },
                {
                    path: '/002addTwoNumbers',
                    name: '002两数相加',
                    component: () => import('./views/LinkedList/AddTwoNumbers')
                },
                {
                    path: '/019removeNthFromEnd',
                    name: '019.删除链表倒数第N个节点',
                    component: () => import('./views/LinkedList/RemoveNthFromEnd')
                },
            ]
        },
        {
            path: '*',
            name: 'Nofind',
            component: () => import('./views/404')
        }
    ]
    // mode: "history"
})

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = !!localStorage.eleToken
//
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     isLogin ? next() : next('/login')
//   }
// })

export default router
