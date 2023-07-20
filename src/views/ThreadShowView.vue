<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import type { Id } from '@/data/types'
import { usePostsStore } from '@/stores/posts'
import { useThreadsStore } from '@/stores/threads'

import PostEditor from '@/components/posts/PostEditor.vue'
import PostList from '@/components/posts/PostList.vue'

const props = defineProps<{ threadId: Id }>()

const { threads } = storeToRefs(useThreadsStore())
const postsStore = usePostsStore()

const thread = computed(() => threads.value.find((t) => t.id === props.threadId))
const threadPosts = computed(() => postsStore.posts.filter((p) => p.threadId === props.threadId))
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread?.title }}</h1>

    <PostList :posts="threadPosts" />

    <PostEditor :thread="thread" @postSaved="postsStore.addPost" />
  </div>
</template>
