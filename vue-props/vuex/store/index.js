import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        city: "上海"
    },

    actions: {
        handleCity(ctx, msg) {
            // console.log(ctx, city)
            ctx.commit("handleCity", msg)
        }
    },
    mutations: {
        handleCity(state, msg) {
            state.city = msg
        }
    }
})
