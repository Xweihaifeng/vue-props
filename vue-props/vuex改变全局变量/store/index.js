import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: "上海"
    },
    actions: {
        handleCity(ctx, msg) {
            // commit 同步操作 this.$store.commit('mutations的方法'，arg)
            ctx.commit("handleCity", msg);
            console.log(ctx, msg);
        }
    },
    mutations: {
        handleCity(state, msg) {
            state.city = msg;
        }
    }
})