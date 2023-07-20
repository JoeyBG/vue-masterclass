import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useUsersStore } from './users'

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUsersStore()

  const authId = ref('VXjpr2WHa8Ux4Bnggym8QFLdv5C3')
  const authUser = computed(() => userStore.users.find((user) => user.id === authId.value))

  return { authId, authUser }
})
