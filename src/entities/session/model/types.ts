export type User = {
  email: string,
  password?: string,
}

export type SessionState = {
  isAuthorized: boolean
  user: User | null,
  errors: {
    emailError: string,
    passwordError: string
  }
}
