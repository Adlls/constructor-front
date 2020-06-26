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
  author?: any,
  id?: string,
  followers?: any,
  skills: string[]
}

export interface Topic {
  id?: string,
  title: string,
  course: any,
  author?: any
}

export interface Lesson {
  title?: string,
  description?: string,
  topic?: any,
  author?: any,
  levels?: any,
  id?: string
}
