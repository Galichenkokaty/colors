<template>
    <div class="catalog__card flex --direction-column --gap-16">
        <div class="catalog__card-thumb thumb">
            <NuxtPicture class="catalog__card--img" :src="card.image +`?random=` + index"/>
        </div>
        <div class="catalog__card-info flex --direction-column --gap-24">
            <div class="catalog__card-name">{{card.title}}</div>
            <div class="catalog__card-price flex --just-space --align-center">
                <div class="catalog__card-price-number">{{ card.price.split('.')[0] }} ₽</div>
                <div @click="addCardInBasket(card)" class="catalog__card-price-buy flex --align-center --just-center">
                    <div class="catalog__card-price-buy-thumb thumb">
                        <NuxtIcon name="plus" filled/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useBasketStore } from '@/stores/basket'
    const { card, index } = defineProps(['card', 'index']);

    const store = useBasketStore()
    const { cardsBasket, finalPrice, countCard } = storeToRefs(store);

    function addCardInBasket(card){
        if(cardsBasket.value.indexOf( card ) === -1){        
            cardsBasket.value.push(card);
            card.count = 1;
            countCard.value = card.count;
        }else{
            let cardAgain = cardsBasket.value[cardsBasket.value.indexOf( card )]
            cardAgain.count += 1;
            countCard.value = cardAgain.count;
        }
        finalPrice.value = 0
        for(let i = 0; i < cardsBasket.value.length; i++){
            finalPrice.value = finalPrice.value + parseInt(cardsBasket.value[i].price, 10)*cardsBasket.value[i].count
        }
    }
</script>