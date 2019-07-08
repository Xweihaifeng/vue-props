<template>
    <div>
        <h2>组件B</h2>
        <h3>{{msg}}</h3>
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
