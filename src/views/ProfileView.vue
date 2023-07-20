<script setup lang="ts">
import { computed } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { usePostsStore } from '@/stores/posts'
import { useThreadsStore } from '@/stores/threads'

const authStore = useAuthStore()
const postsStore = usePostsStore()
const threadsStore = useThreadsStore()

const user = authStore.authUser!

const userPosts = computed(() => postsStore.posts.filter((p) => p.userId === user.id))
const userThreads = computed(() => threadsStore.threads.filter((t) => t.userId === user.id))
</script>

<template>
  <div class="flex-grid">
    <div class="col-3 push-top">
      <div class="profile-card">
        <p class="text-center">
          <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge" />
        </p>

        <h1 class="title">{{ user.username }}</h1>

        <p class="text-lead">{{ user.name }}</p>

        <p class="text-justify">{{ user.bio ?? 'No bio specified.' }}</p>

        <span class="online">{{ user.username }} is online</span>

        <div class="stats">
          <span>{{ userPosts.length }} <PluralizeLabel label="post" :list="userPosts" /> </span>
          <span
            >{{ userThreads.length }} <PluralizeLabel label="thread" :list="userThreads" />
          </span>
        </div>

        <hr />

        <p v-if="user.website" class="text-large text-center">
          <i class="fa fa-globe"></i> <a :href="user.website">{{ user.website }}</a>
        </p>
      </div>

      <p class="text-xsmall text-faded text-center">
        Member since june 2003, last visited 4 hours ago
      </p>

      <div class="text-center">
        <hr />
        <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
      </div>
    </div>

    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead"> Joker's recent activity </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr />

      <PostList :posts="userPosts" />
      <!-- <div class="activity-list">
        <div class="activity">
          <div class="activity-header">
            <img src="https://i.imgur.com/OqlZN48.jpg" alt="" class="hide-mobile avatar-small" />
            <p class="title">
              How can I chop onions without crying?
              <span>Joker started a topic in Cooking</span>
            </p>
          </div>

          <div class="post-content">
            <div>
              <p>
                I absolutely love onions, but they hurt my eyes! Is there a way where you can chop
                onions without crying?
              </p>
            </div>
          </div>

          <div class="thread-details">
            <span>4 minutes ago</span>
            <span>1 comments</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
