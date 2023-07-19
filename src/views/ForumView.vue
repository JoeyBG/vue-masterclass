<script setup lang="ts">
import { computed } from 'vue'

import sourceData from '@/data'
import type { Id } from '@/data/types'

const props = defineProps<{ forumId: Id }>()

const forum = computed(() => sourceData.forums.find((f) => f.id === props.forumId))
const threads = computed(() => sourceData.threads.filter((t) => t.forumId === props.forumId))
</script>

<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum?.name }}</h1>
        <p class="text-lead">{{ forum?.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads" />
  </div>
</template>

<style scoped></style>
