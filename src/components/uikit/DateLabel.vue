<script setup lang="ts">
import dayjs from 'dayjs'
import localizedDate from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

import type { Timestamp } from '@/data/types'

dayjs.extend(localizedDate)
dayjs.extend(relativeTime)

defineProps<{ timestamp: Timestamp }>()

const humanize = (timestamp: Timestamp) => dayjs.unix(timestamp).format('llll')
const timeAgo = (timestamp: Timestamp) => dayjs.unix(timestamp).fromNow()
</script>

<template>
  <span :title="humanize(timestamp)">
    {{ timeAgo(timestamp) }}
  </span>
</template>

<style scoped></style>
