<template>
    <div class="hello">
        <h3>{{ msg }}</h3>
        <div>
            <button @click="addFun">增加</button>
            <button @click="reductionFun">减少</button>
        </div>
        <h2>获取上个页面的值:{{this.$store.state.count}}</h2>
        <h2>获取并计算后的值:{{this.$store.getters.getStateCount}}</h2>
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
    h1,
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
