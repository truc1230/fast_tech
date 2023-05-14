import AddArticle from '@/feature/article/AddArticle'
import React from 'react'

type Props = {}

const article = (props: Props) => {
  return <AddArticle />
}

export default article
article.requireAuth = true