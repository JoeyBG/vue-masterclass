<script setup lang="ts">
import sourceData from '@/data.json'
import { ref } from 'vue'

const threads = ref(sourceData.threads)
</script>

<template>
  <h1>Welcome to the forum</h1>
  <ThreadList :threads="threads" />
</template>
