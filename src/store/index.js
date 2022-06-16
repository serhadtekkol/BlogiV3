import { createStore } from 'vuex'
import { adminstore } from './adminstore/adminstore'
import { authstore } from './adminstore/auth'
import { indexPageStore } from './indexPage'


export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { adminstore, authstore, indexPageStore }
})