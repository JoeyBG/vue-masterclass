<script setup lang="ts">
import { ref } from 'vue'

import type { Post, Thread } from '@/data/types'

const emits = defineEmits<{
  (e: 'postSaved', post: Post): void
}>()

const props = defineProps<{ thread: Thread }>()

const postText = ref('')

const savePost = () => {
  emits('postSaved', {
    id: 'post_' + Math.random(),
    text: postText.value,
    publishedAt: Math.floor(Date.now() / 1000),
    threadId: props.thread.id,
    userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
  })

  postText.value = ''
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="savePost">
      <div class="form-group">
        <textarea
          v-model="postText"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="btn-actions">
        <button class="btn btn-blue" type="submit">Submit post</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
