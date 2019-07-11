<template>
    <div id="app">
        <nav class="nav-list">
            <router-link class="nav-li" :to="{ path: '/passValue1'}">父组件向子组件传值</router-link>
            <router-link class="nav-li" :to="{ path: '/passValue2'}">子组件向父组件传值</router-link>
            <router-link class="nav-li" :to="{ path: '/passValue3'}">兄弟组件之间的传值</router-link>
            <router-link class="nav-li" :to="{ path: '/passValue4'}">vuex改变全局变量</router-link>
            <router-link class="nav-li" :to="{ path: '/passValue5'}">离线缓存数据传值</router-link>
            <router-link class="nav-li" :to="{ path: '/passValue6'}">路由参数传值</router-link>
        </nav>
        <!-- <h1>【路由、vuex，组件传值】</h1> -->
        <!-- <h3>我是App的父级组件</h3> -->
        <!-- <div>接收子组件的值：<strong>{{message}}</strong></div> -->
        <!-- <hr> -->
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