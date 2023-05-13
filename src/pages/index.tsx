import prisma from '@/lib/prisma'
import { getArticles } from '@/pages/api/articles'
import { getSolutions } from '@/pages/api/solutions'
import { Panel } from '@/ui/molecules/'
import { Carousel, ListArticles, OurSolutions } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box, Typography } from '@mui/material'
import { Article, Solution, User } from '@prisma/client'
import React from 'react'

type Props = {
  latestArticle: Article[]
  solutions: Solution[]
}
export default function index(props: Props) {
  const { latestArticle, solutions } = props
  return (
    <DefaultLayout>
      <OurSolutions data={solutions} />
      <Panel
        title='Latest news'
        content='We have many news about technology is updated everyday'
        action='Explore our news'
        to='/news'
      />
      <ListArticles title='Latest Articles' data={latestArticle} />
      <Panel
        title='A global network of nearshore and offshore centres'
        content='Developing leading technology solutions'
        center={true}
        action='Explore our solutions'
        to='/our-solution'
      />
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const resGetArticles = await getArticles({
    limit: 3
  })
  const latestArticle = resGetArticles.data
  const resGetSolutions = await getSolutions({
    limit: 9
  })
  const solutions = resGetSolutions.data
  return {
    props: {
      latestArticle: JSON.parse(JSON.stringify(latestArticle)),
      solutions: JSON.parse(JSON.stringify(solutions))
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
