<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { type Id, type Thread } from '@/data/types'
import { useUsersStore } from '@/stores/users'

defineProps<{ threads: Thread[] }>()

const { users } = storeToRefs(useUsersStore())

const getUserById = (userId: Id) => users.value.find((u) => u.id === userId)
</script>

<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <RouterLink :to="{ name: 'thread-show', params: { threadId: thread.id } }">{{
              thread.title
            }}</RouterLink>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="profile.html">{{ getUserById(thread.userId)?.name }}</a
            >, <DateLabel :timestamp="thread.publishedAt" />.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }} replies</p>

          <img class="avatar-medium" :src="getUserById(thread.userId)?.avatar" alt="" />

          <div>
            <p class="text-xsmall">
              <a href="#">{{ getUserById(thread.userId)?.name }}</a>
            </p>
            <p class="text-xsmall text-faded">
              <DateLabel :timestamp="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
