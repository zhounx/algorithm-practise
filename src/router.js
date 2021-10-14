import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 手写代码
const HandWrightingList = [
    {
        path: '/callApplyAndBind',
        name: 'call, apply和bind',
        component: () => import('./views/HandWritingCode/CallApplyAndBind')
    },
    {
        path: '/deepClone',
        name: 'deepClone',
        component: () => import('./views/HandWritingCode/DeepClone')
    },
    {
        path: '/DT',
        name: 'DT',
        component: () => import('./views/HandWritingCode/DT')
    },
    {
        path: '/extends',
        name: 'extends',
        component: () => import('./views/HandWritingCode/Extends')
    },
    {
        path: '/instanceOf',
        name: 'instanceOf',
        component: () => import('./views/HandWritingCode/InstanceOf')
    },
    {
        path: '/JSON',
        name: 'JSON',
        component: () => import('./views/HandWritingCode/JSON')
    },
    {
        path: '/MVVM',
        name: 'MVVM',
        component: () => import('./views/HandWritingCode/MVVM')
    },
    {
        path: '/new',
        name: 'new',
        component: () => import('./views/HandWritingCode/New')
    },
    {
        path: '/promise',
        name: 'promise',
        component: () => import('./views/HandWritingCode/Promise')
    },
]

// 二分查找
const BinarySearchList = [
    {
        path: '/704-binarySearch',
        name: '704-二分查找',
        component: () => import('./views/BinarySearch/BinarySearch')
    },
    {
        path: '/004-findMedianSortedArrays',
        name: '004-找两个正序数组的中位数',
        component: () => import('./views/BinarySearch/FindMedianSortedArrays')
    },
    {
        path: '/033-findRotationSortedArrays',
        name: '033-搜索旋转排序数组',
        component: () => import('./views/BinarySearch/FindRotationSortedArrays')
    },
    {
        path: '/611-triangleNumber',
        name: '611-有效三角形的个数',
        component: () => import('./views/BinarySearch/TriangleNumber')
    },
    {
        path: '/069-sqrt',
        name: '069-sqrt',
        component: () => import('./views/BinarySearch/Sqrt')
    },
    {
        path: '/jzoffer-11-minArray',
        name: 'jzoffer-11-旋转数组最小的数字',
        component: () => import('./views/BinarySearch/MinArray')
    },
    {
        path: '/035-searchInsert',
        name: '035-搜索插入位置',
        component: () => import('./views/BinarySearch/SearchInsert')
    },
]

// 二叉树
const BinaryTreeList = [
    {
        path: '/102-binarySearch',
        name: '102-二叉树的层序遍历',
        component: () => import('./views/BinaryTree/LevelOrder')
    },
    {
        path: '/124-maxPathSum',
        name: '124-二叉树最大路径和',
        component: () => import('./views/BinaryTree/MaxPathSum')
    },
]

// 链表
const LinkedListList = [
    {
        path: '/002-addTwoNumbers',
        name: '002-两数相加',
        component: () => import('./views/LinkedList/AddTwoNumbers')
    },
    {
        path: '/019-removeNthFromEnd',
        name: '019-删除链表倒数第N个节点',
        component: () => import('./views/LinkedList/RemoveNthFromEnd')
    },
]

// 哈希表
const HashTableList = [
    {
        path: '/001-twoSum',
        name: '001-两数之和',
        component: () => import('./views/HashTable/TwoSum')
    },
]

// 两根指针
const TwoPointersList = [
    {
        path: '/141-hasCycle',
        name: '141-环形链表',
        component: () => import('./views/TwoPointers/HasCycle')
    },
]

// DFS深度优先
const DFSList = [
    {
        path: '/019removeNthFromEnd',
        name: '019.删除链表倒数第N个节点',
        component: () => import('./views/LinkedList/RemoveNthFromEnd')
    },
]

// 拓扑排序
const TopologicalSortList = [
    {
        path: '/207-canFinish',
        name: '207-课程表',
        component: () => import('./views/TopologicalSort/CanFinish')
    },
]

// 字典树
const TrieList = [
    {
        path: '/019removeNthFromEnd',
        name: '019.删除链表倒数第N个节点',
        component: () => import('./views/LinkedList/RemoveNthFromEnd')
    },
]

// 动态规划
const DynamicProgrammingList = [
    {
        path: '/072-minDistance',
        name: '072-编辑距离',
        component: () => import('./views/DynamicProgramming/MinDistance')
    },
]

// 字符串
const StringList = [
    {
        path: '/003-lengthOfLongestSubstring',
        name: '003-无重复字符的最长子串',
        component: () => import('./views/String/LengthOfLongestSubstring')
    },
]

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
                    path: '/handWritingCode',
                    name: '手写代码',
                    icon: 'edit',
                    isRoot: true
                },
                ...HandWrightingList,

                {
                    path: '/binaryTree',
                    name: '二叉树',
                    icon: 'cherry',
                    isRoot: true
                },
                ...BinaryTreeList,
                {
                    path: '/binarySearch',
                    name: '二分查找',
                    icon: 'search',
                    isRoot: true
                },
                ...BinarySearchList,
                {
                    path: '/linkedList',
                    name: '链表',
                    icon: 'link',
                    isRoot: true
                },
                ...LinkedListList,
                {
                    path: '/hashTableList',
                    name: '哈希表',
                    icon: 's-grid',
                    isRoot: true
                },
                ...HashTableList,
                {
                    path: '/string',
                    name: '字符串',
                    icon: 'search',
                    isRoot: true
                },
                ...StringList,
                {
                    path: '/dynamicProgrammingList',
                    name: '动态规划',
                    icon: 'date',
                    isRoot: true
                },
                ...DynamicProgrammingList,
                {
                    path: '/DFS',
                    name: 'DFS深度优先',
                    icon: 'receiving',
                    isRoot: true
                },
                ...DFSList,
                {
                    path: '/topologicalSortList',
                    name: '拓扑排序',
                    icon: 'set-up',
                    isRoot: true
                },
                ...TopologicalSortList,
                {
                    path: '/twoPointersList',
                    name: '两根指针',
                    icon: 'position',
                    isRoot: true
                },
                ...TwoPointersList,
                {
                    path: '/trie',
                    name: '字典树',
                    icon: 'notebook-1',
                    isRoot: true
                },
                ...TrieList,
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
