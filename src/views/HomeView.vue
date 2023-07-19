<script setup lang="ts">
import { ref } from 'vue'

import sourceData from '@/data'

const threads = ref(sourceData.threads)
</script>

<template>
  <h1>Welcome to the forum</h1>
  <ThreadList :threads="threads" />
</template>
