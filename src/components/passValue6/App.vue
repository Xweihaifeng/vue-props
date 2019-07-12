<template>
    <div id="app">
        <h2>我是父级组件App</h2>
        <router-link :to="{name:'children',params:{id:id,msg:msg}}" class="btn">跳转到Children页面</router-link>
        <!-- <router-view /> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: "088",
                msg: "我是passValue6父组件的说明文字。"
            };
        },
        methods: {
            onButton() {}
        }
    };
</script>

<style scoped>
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