import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    //登录
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },
    //个人中心
    {
        path: '/account',
        name: 'about',
        component: () => import('../views/AccountView.vue')
    },
    //房屋
    {
        path: '/house',
        name: 'house',
        component: () => import('../views/HouseView.vue')
    },
    //房间
    {
        path: '/room',
        name: 'room',
        component: () => import('../views/RoomView.vue')
    },
    //家具
    {
        path: '/furniture',
        name: 'furniture',
        component: () => import('../views/FurnitureView.vue')
    },
    //物品
    {
        path: '/item',
        name: 'item',
        component: () => import('../views/ItemView.vue')
    },
    //导入
    {
        path: '/import',
        name: 'import',
        component: () => import('../views/ImportView.vue')
    },
    //分析
    {
        path: '/statistics',
        name: 'statistics',
        component: () => import('../views/StatisticView.vue')
    },
    //书签
    {
        path: '/bookmarks',
        name: 'bookmarks',
        component: () => import('../views/BookmarkView.vue')
    },
    //拓展功能
    {
        path: '/extend',
        name: 'extend',
        component: () => import('../views/extend/ExtendView.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
