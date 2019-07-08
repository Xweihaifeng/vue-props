<template>
    <div>
        <h1>home</h1>
        <router-link :to="{name:'children',params:{id:id,msg:msg}}" class="btn">跳转到Children页面</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: "088",
                msg: "我是home的msg"
            };
        },
        methods: {
            onButton() {}
        }
    };
</script>

<style scoped>
    .btn {
        min-width: 128px;
        height: 46px;
        padding: 0 20px;
        border-radius: 4px;
        background-color: #64c255;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
</style>
