<template>
    <div>
        <h3>我是App的children组件:</h3>
        <div class="btn" @click="onButton">点击子组件传值</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "我是children子组件的data数据"
            }
        },
        methods: {
            onButton() {
                this.$emit("activeName", this.msg)
            }
        },

    }
</script>

<style scoped>
    .btn {
        height: 40px;
        padding: 0 15px;
        display: inline-flex;
        text-align: center;
        align-items: center;
        background: #64c255;
        color: #fff;
        border: none;
        font-size: 16px;
        border-radius: 3px;
        outline: none;
    }
</style>
