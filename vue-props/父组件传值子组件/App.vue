<template>
  <div id="app">
    <h1>我是App的组件</h1>
    <children :active-name1="msg" active-name2="我字面量的App内容"></children>
  </div>
</template>

<script>
  import children from './children'
  export default {
    data() {
      return {
        msg: '我是App的组件msg值'
      }
    },
    components: {
      children
    },
  }
</script>

<style>

</style>
