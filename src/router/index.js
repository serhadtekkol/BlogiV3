import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePostView.vue'
import webadminVue from '../views/webadmin.vue'
import loginViewVue from '../views/loginView.vue'
import newHome from '../views/newHome.vue'
import postDetailVue from '../views/postDetail.vue'


import store from '../store'



const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            // component: HomeView,
            component: newHome,

        },
        // {
        //     path: '/:compo',
        //     name: 'messageme',
        //     component: HomeView

        // },

        {
            path: '/detail/:id',
            name: 'detailpost',
            component: postDetailVue,


        },

        {
            path: '/categories/:category',
            name: 'category',
            component: HomeView

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