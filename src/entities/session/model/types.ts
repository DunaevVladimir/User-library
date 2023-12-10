export type User = {
  userName: string
}

export type SessionState = {
  isAuthorized: boolean
  user: User | null
}
