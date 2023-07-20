<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import type { Id } from '@/data/types'
import { useForumsStore } from '@/stores/forums'
import { useCategoriesStore } from '@/stores/categories'

const props = defineProps<{ categoryId: Id }>()

const { categories } = storeToRefs(useCategoriesStore())
const { forums } = storeToRefs(useForumsStore())

const category = computed(() => categories.value.find((c) => c.id === props.categoryId))
const categoryForums = computed(() => forums.value.filter((f) => f.categoryId === props.categoryId))
</script>

<template>
  <div class="col-full push-top">
    <h1>Discussions</h1>
  </div>

  <ForumList :category="category" :forums="categoryForums" />
</template>

<style scoped></style>
