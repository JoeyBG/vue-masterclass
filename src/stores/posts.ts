import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

import sourceData from '@/data'
import type { Post } from '@/data/types'
import { useThreadsStore } from '@/stores/threads'

export const usePostsStore = defineStore('posts', () => {
  const { threads } = storeToRefs(useThreadsStore())

  const posts = ref(sourceData.posts)

  const addPost = (post: Omit<Post, 'id'>) => {
    const id = 'post_' + Math.random()
    posts.value.push({ ...post, id })

    const thread = threads.value.find((thread) => thread.id === post.threadId)
    if (thread) thread?.posts.push(id)
  }

  return { addPost, posts }
})
