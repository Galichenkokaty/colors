<template>
    <div class="catalog-wrap col --12 flex">
        <div :class="{'--is-open' : isOpenFilter}" class="catalog-filter flex --direction-column --gap-10 col --2">
            <Filter v-for="(item, index) in filterItems" :item="item" :index="index"/>
        </div>
        <div :class="{'--is-open' : isOpenFilter}" class="filter__mask --mask" @click="isOpenFilter = !isOpenFilter"></div>
        <div class="catalog">
            <div class="catalog__cards-head flex --just-space">
                <div  class="catalog__cards-quantity">{{ cards.length }} товаров</div>
                <div  class="catalog__cards-filter --mob" @click="isOpenFilter = !isOpenFilter">Фильтры</div>
                <div class="catalog__cards-sort col --2 flex --align-center">
                    <select v-model="sortValue" name="" id="" class="catalog__cards-sort-items">
                        <option value="costly" class="catalog__cards-sort-item"><span>Сначала дорогие</span></option>
                        <option value="cheap" class="catalog__cards-sort-item">Сначала недорогие</option>
                    </select>
                    <span class="catalog__cards-sort-arrow"></span>
                </div>
            </div>
            <div class="catalog__cards grid --temp-col-5">
                <CatalogCard v-for="(card, index) in sortCards()" :card="card" :index="index" />
            </div>
        </div>
    </div>
</template>
<style>
        @import '~/components/catalog/__catalog.css';
</style>
<script setup>
    import { useCardsStore } from '@/stores/card'
    const store = useCardsStore()
    const { cards, url, filterItems } = storeToRefs(store);

    const sortValue = ref('costly');
    const isOpenFilter = ref(false);

    function sortCards(){
        let arr = cards.value;
        return arr.sort((a,b) =>{
            if(sortValue.value == 'costly'){
                return b.price - a.price;
            }else{
                return a.price - b.price;
            }
        })
    }
</script>