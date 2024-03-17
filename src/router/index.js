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
    // //个人中心
    // {
    //     path: '/account',
    //     name: 'about',
    //     component: () => import('../views/AccountView.vue')
    // },
    // //房屋
    // {
    //     path: '/room',
    //     name: 'house',
    //     component: () => import('../views/RoomView.vue')
    // },
    // //家具
    // {
    //     path: '/furniture',
    //     name: 'furniture',
    //     component: () => import('../views/FurnitureView.vue')
    // },
    // //物品
    // {
    //     path: '/stuff',
    //     name: 'stuff',
    //     component: () => import('../views/StuffView.vue')
    // },
    // //导入
    // {
    //     path: '/import',
    //     name: 'import',
    //     component: () => import('../views/ImportView.vue')
    // },
    // //分析
    // {
    //     path: '/statistics',
    //     name: 'statistics',
    //     component: () => import('../views/StatisticView.vue')
    // },
    // //书签
    // {
    //     path: '/bookmarks',
    //     name: 'bookmarks',
    //     component: () => import('../views/BookmarkView.vue')
    // },
    // //管理
    // {
    //     path: '/manage',
    //     name: 'manage',
    //     component: () => import('../views/ManageView.vue')
    // },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})
// 路由变化时发送页面视图
router.afterEach((to, from) => {
    // 调用全局的 gtag 函数为每个跟踪ID发送页面视图
    window.dataLayer.push({
        'event': 'pageView',
        'page_path': to.fullPath
    });
    const trackingIDs = ['G-QSGX4QE2ZW'];
    // 调用全局的 gtag 函数
    trackingIDs.forEach(id => {
        if (window.gtag) {
            window.gtag('config', id, {
                page_path: to.fullPath,
            });
        }
    })
});
export default router
