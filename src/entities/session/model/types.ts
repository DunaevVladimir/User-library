export type User = {
  email: string,
  password?: string,
}

export type UserData = {
  favorites: string[],
  history: {link: string, title: string, id: number}[]
} & User

export type SessionState = {
  isAuthorized: boolean
  userEmail: string | null,
  errors: {
    emailError: string,
    passwordError: string
  }
}
