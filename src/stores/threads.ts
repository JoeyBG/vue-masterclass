import { ref } from 'vue'
import { defineStore } from 'pinia'

import sourceData from '@/data'

export const useThreadsStore = defineStore('threads', () => {
  const threads = ref(sourceData.threads)

  return { threads }
})
