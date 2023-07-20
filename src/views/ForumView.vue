<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import type { Id } from '@/data/types'
import { useForumsStore } from '@/stores/forums'
import { useThreadsStore } from '@/stores/threads'

const props = defineProps<{ forumId: Id }>()

const { forums } = storeToRefs(useForumsStore())
const { threads } = storeToRefs(useThreadsStore())

const forum = computed(() => forums.value.find((f) => f.id === props.forumId))
const forumThreads = computed(() => threads.value.filter((t) => t.forumId === props.forumId))
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
    <ThreadList :threads="forumThreads" />
  </div>
</template>

<style scoped></style>
