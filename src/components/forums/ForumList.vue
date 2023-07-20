<script setup lang="ts">
import type { Category, Forum } from '@/data/types'

defineProps<{ forums: Forum[]; category?: Category }>()
</script>

<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <RouterLink
          v-if="category"
          :to="{ name: 'category', params: { categoryId: category.id } }"
          >{{ category.name }}</RouterLink
        >
        <span v-else>Forums</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <RouterLink :to="{ name: 'forum', params: { forumId: forum.id } }" class="text-xlarge">{{
            forum.name
          }}</RouterLink>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length ?? 0 }}</span>
            {{ forum.threads?.length === 1 ? 'thread' : 'threads' }}
          </p>
        </div>

        <div class="last-thread">
          <!-- <img
          class="avatar"
          src="https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg"
          alt=""
        />
        <div class="last-thread-details">
          <a href="thread.html">Post Reactions</a>
          <p class="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a month ago</p>
        </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
