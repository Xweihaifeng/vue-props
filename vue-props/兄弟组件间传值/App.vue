<template>
    <div id="app">
        <h1> 兄弟组件A： </h1>
        <div class="btn" @click="onButton"> 组件A </div>
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
        width: 128px;
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
