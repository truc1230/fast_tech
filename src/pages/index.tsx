import { Panel, Solution } from '@/ui/molecules/'
import { ListArticles, OurSolutions } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box, Typography } from '@mui/material'
import { User } from '@prisma/client'
import React from 'react'

type Props = {
  title: string
  users: User[]
}
export default function index(props: Props) {
  const { title, users } = props
  return (
    <DefaultLayout>
      <Typography variant='h3'>{title}</Typography>
      <OurSolutions />
      <Panel />
      <ListArticles title='Latest Articles' />
      <Panel
        title='A global network of nearshore and offshore centres'
        content='Developing leading technology solutions'
        center={true}
      />
    </DefaultLayout>
  )
}

// export async function getStaticProps() {
//   const users = await prisma.user.findMany()
//   console.log(users)
//   return {
//     props: {
//       title: 'Home page',
//       users
//     }
//   }
// }

// export async function getServerSideProps() {
//   const users = await prisma.article.findMany()

//   return {
//     props: {
//       title: 'Home page',
//       users
//     }
//   }
// }
