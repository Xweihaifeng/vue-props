<template>
    <div id="app">
        <h2>我是App的组件</h2>
        <p>我是父组件的值：{{msgX}}</p>
        <hr>
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

<style></style>