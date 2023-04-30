import { Article, Recruitment, User } from '@prisma/client'
export type QueryParams<T> = {
  limit?: number
  page?: number
  order?: keyof T
  by?: TypeOrderBy
  textSearch?: string
}

export type TypeOrderBy = 'desc' | 'asc'

export type Users = Omit<User, 'password'>[]

export type FormUser = Partial<User>
export type FormArticle = Partial<Article>
export type FormRecruitment = Partial<Omit<Recruitment, 'id'>>

export type TypeId = string | number
export type TArticleWithAuthor = Article & {
  author: FormUser
}

export type TApiResponseError = {
  response: {
    data: {
      message: string
    }
  }
}
export type TAttachmentEmail = {
  content: string
}
export type TContentEmail = {
  attachments?: TAttachmentEmail[]
  name?: string
  email?: string
  address?: string
  request?: string
  subject: string
  introduce?: string
  type: ETypeSendMail
}
export enum ETypeSendMail {
  contact,
  recruitment
}
