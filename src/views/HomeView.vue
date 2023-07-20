<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCategoriesStore } from '@/stores/categories'

const { categories } = storeToRefs(useCategoriesStore())
</script>

<template>
  <div class="col-full">
    <h1 class="push-top">Welcome to the forum</h1>
    <CategoryList :categories="categories" />
  </div>
</template>
