import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        components: {
            systemBar: true,
        },
    },
    getters: {},
    mutations: {
        setSystemBarVisible(state) {
            state.components.systemBar = !state.components.systemBar
        },
    },
    actions: {},
    modules: {},
})
export default store
