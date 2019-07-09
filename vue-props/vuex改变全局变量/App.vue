<template>
    <div id="app">
        <h1>我是App的组件</h1>
        <h1 @click="onVuex" class="btn">点击修改vuex公共数据</h1>
        <hr />
        <children></children>
        <hr />
        <children2></children2>
    </div>
</template>
<script>
    import children from "./children";
    import children2 from "./children2";
    export default {
        data() {
            return {
                city: "App修改城市为北京"
            };
        },
        components: {
            children,
            children2,
        },
        methods: {
            onVuex() {
                // dispatch 异步操作 this.$store.dispatch('actions的方法'，arg)
                this.$store.dispatch("handleCity", this.city);
            }
        }
    };
</script>
<style>
    .btn {
        width: 360px;
        height: 30px;
        padding: 20px;
        display: flex;
        text-align: center;
        align-items: center;
        line-height: 1px;
        background: gold;
        border-radius: 10px;
    }
</style>
