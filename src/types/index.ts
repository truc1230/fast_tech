import { User } from '@prisma/client'
export type QueryParams<T> = {
  limit?: number
  page?: number
  order?: keyof T
  by?: TypeOrderBy
}

export type TypeOrderBy = 'desc' | 'asc'

export type Users = Omit<User, 'password'>[]
