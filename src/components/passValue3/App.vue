<template>
    <div id="app">
        <h2> 兄弟组件A：</h2>
        <button class="btn" @click="onButton"> 组件A </button>
        <hr />
        <children></children>
    </div>
</template>

<script>
    import connect from './eventbus'
    import children from './children'
    export default {
        data() {
            return {
                message: '组件A红包（data）要给组件B了'
            }
        },
        components: {
            children
        },
        methods: {
            onButton() {
                connect.$emit("activeName", this.message)
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
