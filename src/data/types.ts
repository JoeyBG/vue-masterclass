export type Id = string
export type Markdown = string
export type Timestamp = number
export type Url = string

export type Post = {
  edited?: {
    at: Timestamp
    by: Id
    moderated: boolean
  }
  publishedAt: Timestamp
  text: Markdown
  threadId: Id
  userId: Id
  id: Id
}

export type Thread = {
  contributors: Id[]
  firstPostId: Id
  forumId: Id
  lastPostAt: Timestamp
  lastPostId: Id
  posts: Id[]
  publishedAt: Timestamp
  slug: string
  title: string
  userId: Id
  id: Id
}

export type User = {
  avatar: Url
  email: string
  lastVisitAt: Timestamp
  name: string
  isModerator: boolean
  registeredAt: Timestamp
  username: string
  usernameLower: string
  id: Id
}
