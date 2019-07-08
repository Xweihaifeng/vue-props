<template>
    <div id="app">
        <h1>组件A</h1>
        <div class="btn" @click="onButton">
            组件A按钮
        </div>
        <div class="btn" @click="offButton">清除sessionStorage</div>
        <children></children>
    </div>
</template>

<script>
    import children from "./children";
    export default {
        data() {
            return {
                message: "我组件A内的data传给组件B"
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
        min-width: 128px;
        padding: 0 10px;
        height: 46px;
        border-radius: 4px;
        background-color: #64c255;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
</style>
