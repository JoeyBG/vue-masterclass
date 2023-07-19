<script setup lang="ts">
import { computed, ref } from 'vue'

import sourceData from '@/data.json'
import type { Post } from '@/data/types'

import PostEditor from '@/components/posts/PostEditor.vue'
import PostList from '@/components/posts/PostList.vue'

const props = defineProps<{ threadId: string }>()

const posts = ref(sourceData.posts as Post[])

const thread = computed(() => sourceData.threads.find((t) => t.id === props.threadId))
const threadPosts = computed(() => posts.value.filter((p) => p.threadId === props.threadId))

const addPost = (post: Post) => {
  posts.value.push(post)
  thread.value?.posts.push(post.id)
}
</script>

<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <PostList :posts="threadPosts" />

    <PostEditor :thread="thread" @postSaved="addPost" />
  </div>
</template>
