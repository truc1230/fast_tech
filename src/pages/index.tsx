import prisma from '@/lib/prisma'
import { getArticles } from '@/pages/api/articles'
import { Panel, Solution } from '@/ui/molecules/'
import { ListArticles, OurSolutions } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box, Typography } from '@mui/material'
import { Article, User } from '@prisma/client'
import React from 'react'

type Props = {
  latestArticle: Article[]
}
export default function index(props: Props) {
  const { latestArticle } = props
  return (
    <DefaultLayout>
      <OurSolutions data={[]} />
      <Panel />
      <ListArticles title='Latest Articles' data={latestArticle} />
      <Panel
        title='A global network of nearshore and offshore centres'
        content='Developing leading technology solutions'
        center={true}
      />
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const res = await getArticles({
    limit: 3,
  })
  const latestArticle = res.data
  return {
    props: {
      latestArticle: JSON.parse(JSON.stringify(latestArticle))
    }
  }
}

// export async function getServerSideProps() {
//   const users = await prisma.article.findMany()

//   return {
//     props: {
//       title: 'Home page',
//       users
//     }
//   }
// }
