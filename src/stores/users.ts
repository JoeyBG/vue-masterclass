import { ref } from 'vue'
import { defineStore } from 'pinia'

import sourceData from '@/data'

export const useUsersStore = defineStore('users', () => {
  const users = ref(sourceData.users)

  return { users }
})
