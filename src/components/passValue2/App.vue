<template>
    <div id="app">
        <h2>我是App的父级组件</h2>
        <div>接收子组件的值：<strong>{{message}}</strong></div>
        <hr>
        <children @activeName="outChlid($event)"></children>
    </div>
</template>

<script>
    import children from './children'

    export default {
        data() {
            return {
                message: ''
            }
        },
        components: {
            children
        },
        methods: {
            outChlid(data) {
                this.message = data;
            }
        },
        created() {
            this.outChlid()
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
