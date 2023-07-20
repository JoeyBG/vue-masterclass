<script setup lang="ts">
import sourceData from '@/data'
import type { Category } from '@/data/types'

defineProps<{ categories: Category[] }>()

const getForumsForCategory = (category: Category) => {
  return sourceData.forums.filter((f) => f.categoryId === category.id)
}
</script>

<template>
  <ForumList
    :forums="getForumsForCategory(category)"
    :category="category"
    v-for="category in categories"
    :key="category.id"
  />
</template>

<style scoped></style>
