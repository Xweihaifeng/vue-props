<template>
    <div id="app">
        <h1>【路由、vuex，组件传值】</h1>
        <h3>我是App的父级组件</h3>
        <div>接收子组件的值：<strong>{{message}}</strong></div>
        <hr>
        <router-view @activeName="outChlid($event)" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: ''
            }
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

<style></style>