<template>
    <div id="app">
        <h2>我是App的组件</h2>
        <button @click="onVuex" class="btn">点击修改vuex公共数据</button>
        <hr />
        <children></children>
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
        padding: 9px;
        display: flex;
        text-align: center;
        align-items: center;
        background: #64c255;
        color: #fff;
        border: none;
        font-size: 16px;
        border-radius: 3px;
        outline: none;
    }
</style>