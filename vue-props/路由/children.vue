<template>
    <div>
        <h2>children</h2>
        <div>
            <span>home组件通过路由过来的ID：</span>
            <strong>{{id}}</strong>
        </div>
        <div>
            <span>home组件通过路由传过来的msg：</span>
            <strong>{{msg}}</strong>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: this.$route.params.msg,
                id: this.$route.params.id
            };
        },
        created() {}
    };
</script>

<style scoped>
</style>
