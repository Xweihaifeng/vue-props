<template>
  <div>
    <h2>我是children 组件</h2>
    <hr>
    <div class="btn" @click="onButton">
      子组件
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg:"我是子组件的数据"
      }
    },
    methods:{
      onButton(){
        this.$emit("activeName",this.msg)
      }
    },

  }
</script>

<style scoped>
.btn{
  width: 128px;
  height: 46px;
  border-radius: 4px;
  background-color: #64c255;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
