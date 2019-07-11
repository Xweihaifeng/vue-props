<template>
    <div id="app">
        <h1>我是App的父级组件</h1>
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
                console.log(data)
                this.message = data
            }
        },
        created() {
            this.outChlid()
        }
    }
</script>

<style>

</style>
