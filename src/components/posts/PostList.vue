<script setup lang="ts">
import { ref } from 'vue'

import sourceData from '@/data.json'
import type { Id, Post } from '@/data/types'

defineProps<{ posts: Post[] }>()

const users = ref(sourceData.users)

const getUserById = (userId: Id) => users.value.find((u) => u.id === userId)
</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">{{ getUserById(post.userId).name }}</a>

        <a href="#">
          <img class="avatar-large" :src="getUserById(post.userId).avatar" alt="" />
        </a>

        <p class="desktop-only text-small">X posts</p>
      </div>

      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
        </div>
      </div>

      <div class="post-date text-faded">
        <DateLabel :timestamp="post.publishedAt" />
      </div>
    </div>
  </div>
</template>
