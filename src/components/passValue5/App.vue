<template>
    <div id="app">
        <h2> 父级组件A： </h2>
        <button class="btn" @click="onButton"> 设置sessionStorage </button>
        <button class="btn" @click="offButton"> 清除sessionStorage </button>
        <button class="btn" @click="refButton"> 刷新sessionStorage </button>
        <children></children>
    </div>
</template>

<script>
    import children from "./children";
    export default {
        data() {
            return {
                message: "我是组件A内的data传给组件B"
            };
        },
        components: {
            children
        },
        methods: {
            onButton() {
                const DateA = this.message;
                sessionStorage.setItem("activeName", DateA);
            },
            offButton() {
                sessionStorage.clear();
            },
            refButton() {
                console.info('refre');
                // this.$router.push({path: '/passValue5'});
                // window.location.pathname = '/passValue5'
                // window.location.reload();
            }
        }
    }
</script>

<style scoped>
    .btn {
        height: 40px;
        padding: 0 15px;
        display: inline-flex;
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
