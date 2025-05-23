// lib/users.ts
export type User = {
  name: string
  email: string
  password: string
}

export const users: User[] = [
  {
    name: "Test User",
    email: "prueba@me.com",
    password: "password", // In production, always hash passwords!
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: "123456",
  },
  {
    name: "John Smith",
    email: "john@example.com",
    password: "abc123",
  },
]
