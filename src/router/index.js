import { createRouter, createWebHistory } from 'vue-router'

import webadminVue from '../views/webadmin.vue'
import loginViewVue from '../views/loginView.vue'

import postDetailVue from '../views/postDetail.vue'
import CategoryListVue from '../views/CategoryList.vue'
import apps from '../views/apps.vue'
import homeviewVue from '../views/homeview.vue'


import store from '../store'



const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [

        // {
        //     path: '/',
        //     name: 'home',
        //     // component: HomeView,
        //     component: newHome,

        // },
        {
            path: '/',
            name: 'homem',
            component: homeviewVue

        },

        {
            path: '/detail/:id',
            name: 'detailpost',
            component: postDetailVue,


        },

        {
            path: '/posts/:id',
            name: 'category',
            component: CategoryListVue

        },


        {
            path: '/login',
            name: 'loginpage',
            component: loginViewVue

        },


        {
            path: '/master/:compo/',
            name: 'adminMasters',
            component: webadminVue,
            meta: { requiresAuth: true }
        },
        {
            path: '/master/editpost/:id',
            name: 'editpost',
            component: webadminVue,
            meta: { requiresAuth: true }
        },

        {
            path: '/apps/:appname?',
            name: 'apps',
            component: apps

        }


    ]
})


router.beforeEach(async(to, from, next) => {



    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    // store.dispatch("authstore/getSession");


    const currentUser = await store.dispatch("authstore/getSession");

    const sessionval = sessionStorage.getItem('session')

    if (requiresAuth && !currentUser) {
        next("/login")
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})





export default router