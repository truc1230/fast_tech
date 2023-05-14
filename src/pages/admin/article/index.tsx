import AdminArticle from '@/feature/article/AdminArticle'
import React from 'react'

type Props = {}

const article = (props: Props) => {
  return <AdminArticle />
}

export default article
article.requireAuth = true
