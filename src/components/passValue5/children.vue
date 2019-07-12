<template>
    <div>
        <h2> 子组件B：<strong>{{msg}}</strong></h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: ""
            }
        },
        created() {
            console.log(sessionStorage.getItem('activeName'))
            this.msg = sessionStorage.getItem('activeName')
        }
    }
</script>
<style scoped>

</style>