<template>
    <div id="basket-popup" class="basket grid">
        <div class="basket__head flex --just-space --align-center">
            <h2 class="basket__title">Корзина</h2>
            <div class="basket__close flex --align-center --just-center" @click="isOpenBasket = !isOpenBasket"></div>
        </div>
        <div class="basket__body flex --direction-column ">
            <div class="basket__body-head flex --just-space">
                <div class="basket__body-head-count"><span>{{ cardsBasket.length }}</span> товара</div>
                <div class="basket__body-head-delete">очистить список</div>
            </div>
            <div v-if="cardsBasket" class="basket__body-cards flex --direction-column">
                <BasketCard v-for="(card, index) in cardsBasket" :card="card" :index="index"></BasketCard>
            </div>
        </div>
        <div class="basket__footer flex --just-space">
            <div class="basket__price flex --direction-column">
                <span>Итого</span>
                <span>{{ finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}₽</span>
            </div>
            <button class="basket__button">Оформить заказ</button>
        </div>
    </div>
</template>
<style>
        @import '~/components/basket/__basket.css';
</style>
<script setup>
    import { useBasketStore } from '@/stores/basket'

    const store = useBasketStore()
    const { cardsBasket, isOpenBasket, finalPrice } = storeToRefs(store);
</script>