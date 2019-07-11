<template>
    <div>
        <h2>我是App的children组件:</h2>
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
        width: 135px;
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
