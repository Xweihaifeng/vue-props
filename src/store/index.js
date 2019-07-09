import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vues

// 使用Vues
Vue.use(Vuex)

// 创建Vues实例
const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        getStateCount: function(state) {
            return state.count + 1;
        }
    },
    mutations: {
        add(state) {
            state.count = state.count + 1;
        },
        reduction(state) {
            state.count = state.count - 1;
        }
    },
    actions: {
        addFun(context) {
            context.commit('add');
        },
        reductionFun(context) {
            context.commit('reduction');
        }
    }
})

export default store; // 导出store