import { ref } from 'vue'
import { defineStore } from 'pinia'

import sourceData from '@/data'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref(sourceData.categories)

  return { categories }
})
