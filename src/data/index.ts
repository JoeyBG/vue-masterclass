import sourceData from '@/data/data.json'
import type { Forum, Post, Thread, User } from './types'

export default {
  forums: sourceData.forums as Forum[],
  posts: sourceData.posts as Post[],
  threads: sourceData.threads as Thread[],
  users: sourceData.users as User[]
}
