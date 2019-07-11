<template>
    <div>
        <h2>我是children-1 组件</h2>
        <span><strong>Vuex的city：</strong>{{this.$store.state.city}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>
<style scoped>
</style>
