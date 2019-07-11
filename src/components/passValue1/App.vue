<template>
    <div id="app">
        <h1>我是App的组件</h1>
        <children :active-name1="msgX" active-name2="我是App父组件msgY的值"></children>
    </div>
</template>

<script>
    import children from './children'
    export default {
        data() {
            return {
                msgX: '我是App父组件msgX的值'
            }
        },
        components: {
            children
        },
    }
</script>

<style>

</style>
