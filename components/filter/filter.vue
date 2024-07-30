<template>
    <div class="filter__element flex  --gap-12">
        <label class="filter__element-toggle">
            <input v-model="filter" type="checkbox" class="filter__element-toggle-input" id=""  @click="addfilterValue(item.name)">
            <span class="filter__element-toggle-bg"></span>
            <span class="filter__element-toggle-circle"></span>
        </label>
        <div class="filter__element-text" v-html="item.title"></div>
    </div>
</template>
<style>
        @import '~/components/filter/__filter.css';
</style>
<script setup>    
    import { useCardsStore } from '@/stores/card'
    const store = useCardsStore()
    const { filterValue, url } = storeToRefs(store);
    const { item, index } = defineProps(['item', 'index']);


    const filter = ref(false);

    function getFilterCards(){
        if(filterValue.value.length > 0){
            url.value = url.value + `?`+ filterValue.value[0] + `=true`
        }
    }

    function addfilterValue(elem){
        if(filterValue.value.indexOf( elem ) === -1){
            filterValue.value.push(elem)
        }else{
            filterValue.value.splice(filterValue.value.indexOf(elem), 1);
        }
        getFilterCards()
    }
</script>