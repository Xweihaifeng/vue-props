<template>
    <div class="hello">
        <h2>{{ msg }}</h2>
        <div>
            <button @click="addFun">增加</button>
            <button @click="reductionFun">减少</button>
        </div>
        <h2>获取上个页面的值:{{this.$store.state.count}}</h2>
        <h2>获取并计算后的值:{{this.$store.getters.getStateCount}}</h2>
        <ul>
            <li>
                <a href="https://vuejs.org" target="_blank">Core Docs</a>
            </li>
            <li>
                <a href="https://forum.vuejs.org" target="_blank">Forum</a>
            </li>
            <li>
                <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
            </li>
            <li>
                <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
            </li>
            <li>
                <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
            </li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            addFun() {
                // this.$store.commit('add');
                this.$store.dispatch('addFun');
            },
            reductionFun() {
                // this.$store.commit('reduction');
                this.$store.dispatch('reductionFun');
            }
        }
    }
</script>

<style scoped>
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>