export interface User {
  email: string,
  password: string
}

export interface ResponseLoginUser {
    token: string,
    role: string,
    id: string
}
