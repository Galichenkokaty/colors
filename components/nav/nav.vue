<template>
    <div class="nav flex --just-center">
        <div class="nav__wrap  flex --align-center col --12 --just-space">
            <div class="nav__mob-btn flex --direction-column" @click="isOpen = !isOpen">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div :class="{'--is-open' : isOpen}" class="nav-mob__wrap flex --directio-column">
                <div :class="{'--is-open' : isOpen}" class="nav__mob-btn flex --direction-column" @click="isOpen = !isOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="nav__menu --mob flex --gap-24 --align-center">
                    <a v-for="(item, index) in menu" :href="item.link" class="nav__menu-item link" v-html="item.name"></a>
                </div>
                <div class="nav__tel flex --direction-column">
                    <a href="tel:+74952217769" class="nav__tel-number link">+7 (495) 221-77-69</a>
                    <div class="nav__tel-text">Заказать звонок</div>
                </div>
            </div>
            <div class="nav__logo col --2">
                <div class="nav__logo-thumb thumb">
                    <NuxtIcon name="logo" filled />
                </div>
            </div>
            <div class="nav__block col --10 flex --align-center --just-space">
                <div class="nav__menu flex --gap-24 --align-center">
                    <a v-for="(item, index) in menu" :href="item.link" class="nav__menu-item link" v-html="item.name"></a>
                </div>
                <div class="nav__info flex">
                    <div class="nav__tel flex --direction-column">
                        <a href="tel:+74952217769" class="nav__tel-number link">+7 (495) 221-77-69</a>
                        <div class="nav__tel-text">Заказать звонок</div>
                    </div>
                    <div class="nav__buttons flex">
                        <div v-for="(button, index) in buttons" class="nav__button thumb">
                            <NuxtIcon :name="button.name" filled/>
                        </div>
                        <div class="nav__button --basket thumb flex --align-center --just-center" @click="isOpenBasket = !isOpenBasket">
                            <span>{{ cardsBasket.length }}</span>
                            <NuxtIcon name="nav/basket" filled/>
                        </div>
                    </div>
                </div>
            </div>
            <Basket :isOpenBasket="isOpenBasket" :class="{'--is-open' : isOpenBasket}"/>
            <div :class="{'--is-open' : isOpenBasket}" class="basket__mask --mask" @click="isOpenBasket = !isOpenBasket"></div>
        </div>
    </div>
</template>
<style>
        @import '~/components/nav/__nav.css';
</style>
<script setup>
    import { useBasketStore } from '@/stores/basket'

    const store = useBasketStore()
    const { isOpenBasket, cardsBasket } = storeToRefs(store);

    const isOpen = ref(false)
    const menu = ref(
        [
            {
                name:'продукты',
                link:'#'
            },
            {
                name:'цвета',
                link:'#'
            },
            {
                name:'вдохновение',
                link:'#'
            },
            {
                name:'советы',
                link:'#'
            },
            {
                name:'найти магазин',
                link:'#'
            },
        ]
    );
    const buttons = ref(
        [
            {
                name: 'nav/search'
            },
            {
                name: 'nav/profile'
            },
            {
                name: 'nav/heart'
            },
        ]
    )
</script>