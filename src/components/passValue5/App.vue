<template>
    <div id="app">
        <h2> 父级组件A： </h2>
        <button class="btn" @click="onButton"> 组件A按钮 </button>
        <button class="btn" @click="offButton"> 清除sessionStorage </button>
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
                // 清除sessionStorage
                sessionStorage.clear();
            }
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