// lib/users.ts
export type User = {
  name: string
  email: string
  password: string
  avatar?: string
}

export const users: User[] = [
  {
    name: "Test User",
    email: "prueba@me.com",
    password: "password",
    avatar: "/avatar/avatar.png",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: "123456",
    avatar: "/avatar/girl.png",
  },
]
