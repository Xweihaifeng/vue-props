<template>
    <div>
        <h2>我是children 组件</h2>
        <div>
            <div>动态数据：<span><strong>{{activeName1}}</strong></span></div>
            <div>常量数据：<span><strong>{{activeName2}}</strong></span></div>
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

<style scoped></style>