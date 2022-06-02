import { createStore } from 'vuex'
import { adminstore } from './adminstore/adminstore'
import { authstore } from './adminstore/auth'


export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { adminstore, authstore }
})