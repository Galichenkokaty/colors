import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
    const url = ref('https://66a0f75c7053166bcabd8424.mockapi.io/card');
    const { data, error } = useFetch(url.value);
    const cards = ref(data);
    const filterItems = ref(
      [
          {
              name:'newFilter',
              title:'Новые'
          },
          {
              name:'inStock',
              title:'Есть в наличии'
          },
          {
              name:'contractual',
              title:'Контрактные'
          },
          {
              name:'exclusive',
              title:'Эксклюзивные'
          },
          {
              name:'sale',
              title:'Распродажа'
          },
      ]
  )
    const filterValue = ref([])

    watch(url, ( newValue, oldValue ) => {
        url.value = newValue;

    })
  return { cards, url, filterItems, filterValue}
})