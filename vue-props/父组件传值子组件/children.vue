<template>
  <div>
    <h2>我是children 组件</h2>
    <div>
      <div>动态数据：<p>{{activeName1}}</p></div>
      <hr>
      <div>常量数据：<p>{{activeName2}}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeName1: {
      type: String
    },
    activeName2: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
