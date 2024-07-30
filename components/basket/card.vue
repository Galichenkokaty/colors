<template>
    <div class="basket__body-card flex --align-end --just-space">
        <div class="basket__card-block flex">
            <div class="catalog__card-thumb thumb">
                <NuxtPicture class="catalog__card--img" :src="card.image"/>
            </div>
            <div class="catalog__card-info flex --direction-column --gap-16">
                <div class="catalog__card-name">{{card.title}}</div>
                <div class="catalog__card-price flex --just-space --align-center">
                    <div class="catalog__card-price-number">{{ card.price.split('.')[0]*card.count }} ₽</div>
                </div>
            </div>
        </div>
        <div class="basket__card-block flex --align-center">
            {{ card.count }}
            <div class="basket__card-count flex --align-center">
                <button :class="{'--disabled' : card.count == 0}" class="basket__card-count-btn --minus" @click="changePrice(card, 'minus')">
                    <div class="catalog__card-price-buy-thumb thumb">
                        <NuxtIcon name="minus" filled/>
                    </div>
                </button>
                <input v-model="card.count" type="number" class="basket__card-count-input">
                <button class="basket__card-count-btn --plus" @click="changePrice(card, 'plus')">
                    <div class="catalog__card-price-buy-thumb thumb">
                        <NuxtIcon name="plus" filled/>
                    </div>
                </button>
            </div>
            <div @click="deleteCardBasket(card)" class="basket__delete flex --align-center --just-center"></div>
        </div>
    </div>
</template>
<script setup>
    import { useBasketStore } from '@/stores/basket'
    const { card, index } = defineProps(['card', 'index']);

    const store = useBasketStore()
    const { cardsBasket, finalPrice, countCard} = storeToRefs(store);
    
    function changePrice(elem, sym){
        finalPrice.value = 0
        if(sym === 'plus'){
            elem.count += 1;
        }else{
            elem.count -= 1;
        }
        countCard.value = elem.count;
        for(let i = 0; i < cardsBasket.value.length; i++){
            console.log(parseInt(cardsBasket.value[i].price, 10)*elem.count)
            finalPrice.value = finalPrice.value + parseInt(cardsBasket.value[i].price, 10)*cardsBasket.value[i].count
        }
    }

    function deleteCardBasket(elem){
        let indexCard = cardsBasket.value.indexOf(elem);
        countCard.value = elem.count;
        finalPrice.value = finalPrice.value - parseInt(cardsBasket.value[indexCard].price, 10)*countCard.value
        cardsBasket.value.splice(cardsBasket.value.indexOf(elem), 1);
    }
</script>