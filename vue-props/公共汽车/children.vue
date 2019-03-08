<template>
  <div>
    <h2>组件B</h2>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
  import connect from './eventbus'
  export default {
    data() {
      return {
        msg:""
      }
    },
    created() {
      connect.$on('activeName', item => {
        this.msg = item
      })
    }
  }
</script>

<style scoped>

</style>
