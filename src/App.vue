<template>
    <div id="public">
        <header class="main-header">
            <nav class="main-nav">
                <router-link class="nav-li" :to="{ path: '/passValue1'}">父组件向子组件传值</router-link>
                <router-link class="nav-li" :to="{ path: '/passValue2'}">子组件向父组件传值</router-link>
                <router-link class="nav-li" :to="{ path: '/passValue3'}">兄弟组件之间的传值</router-link>
                <router-link class="nav-li" :to="{ path: '/passValue4'}">vuex改变全局变量</router-link>
                <router-link class="nav-li" :to="{ path: '/passValue5'}">离线缓存数据传值</router-link>
                <router-link class="nav-li" :to="{ path: '/passValue6'}">路由参数传值</router-link>
            </nav>
        </header>
        <section class="main-section">
            <router-view />
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created() {}
    }
</script>

<style scoped>
    .main-header {height: 60px;display: flex;justify-content: space-around;align-items: center;background: rgba(6, 16, 46, 0.73);color: #fff;}
    .main-nav {display: flex;justify-content: center;align-items: center;width: 1120px;height: 100%;}
    .main-nav > a {height: 100%;display: inline-flex;align-items: center;padding: 0 15px;color: #fff;}
    .main-nav > a:hover {background: rgba(255, 255, 255, 0.25);}
    .main-section {height: calc(100% - 90px);padding: 15px;}
</style>