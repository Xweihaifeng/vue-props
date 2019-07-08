<template>
    <div>
        <h2>其他组件也会随着一起改</h2>
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
