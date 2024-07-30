<template>
    <div class="header flex --just-center --align-center">
        <h1 class="header__title --mob">Краски</h1>
        <div class="swiper header__carusel swiper-container flex --direction-column --align-center">
            <div class="header__carusel-nav flex">
                <div class="swiper-button-prev swiper-button">
                    <span></span>
                </div>
                <div class="swiper-button-next swiper-button">
                    <span></span>
                </div>
            </div>
            <div class="swiper-wrapper">
                <div v-for="(text, index) in 5" class="header__text swiper-slide flex --direction-column --just-center --align-center">
                    <h1 class="header__title">Краски</h1>
                    <p class="header__desc">Идеально подходят для стен и других поверхностей.<br> Найди свой идеальный цвет!</p>
                </div>
            </div>
            <div class="header__carusel-pagination swiper-pagination"></div>
        </div>
        <div class=" header__bg thumb">
            <NuxtPicture class="header__bg-img" src="header/header__bg-1.jpg"/>
        </div>
    </div>
</template>
<style>
        @import '~/components/header/__header.css';
</style>
<script >
    import Swiper, { Navigation, Pagination } from 'swiper'
    import 'swiper/swiper-bundle.css'

    export default{
        mounted(){
            Swiper.use([Navigation, Pagination]);
            const swiper = new Swiper('.header__carusel', {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,

                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }

            });
        }
    }

</script>