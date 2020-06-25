export interface User {
  email: string,
  password: string
}

export interface ResponseLoginUser {
    token: string,
    role: string,
    id: string
}

export interface Course {
  title: string,
  description: string,
  typeAccess: string,
  author?: string,
  skills: string[]
}
