<template>
    <article class="mySwiper">
        <section class="mySwiper-box">
            <ul class="mySwiper-list">
                <li v-for="v in swiper.list"><img :src="v.img" alt=""></li>
            </ul>
        </section>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                message: "我是组件A内的data传给组件B",
                swiper: {
                  loop: true,
                  seconds: 3000,
                  list: [
                    {img: 'static/img/1.jpg'},
                    {img: 'static/img/2.jpg'},
                    {img: 'static/img/3.jpg'}
                  ]
                }
            };
        },
        methods: {
            onButton() {
                console.info(1123);
            },

        }
    }
</script>

<style scoped>
</style>
