import { defineStore } from 'pinia'

    export const useBasketStore = defineStore('basket', () => {
        const cardsBasket = ref([]);
        const countCard = ref(0);
        const isOpenBasket = ref(false);
        const finalPrice = ref(0);


    return { countCard, cardsBasket, finalPrice, isOpenBasket}
})