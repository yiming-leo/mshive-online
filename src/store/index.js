import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        components: {
            systemBar: true,
            registerForm: false,
            loginForm: true,
        },
    },
    getters: {},
    mutations: {
        setSystemBarVisible(state) {
            state.components.systemBar = !state.components.systemBar
        },
        setRegisterFormVisible(state){
            state.components.registerForm = true
            state.components.loginForm = false
        },
        setLoginFormVisible(state){
            state.components.registerForm = false
            state.components.loginForm = true
        },
    },
    actions: {},
    modules: {},
})
export default store
