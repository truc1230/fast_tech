import { articleService } from '@/service'
import { Article, FormSearch, Panel } from '@/ui/molecules'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Chip, Grid, Stack, Typography } from '@mui/material'
import { Article as TArticles } from '@prisma/client'
import React from 'react'

type Props = {
  title: string
  articles: TArticles[]
}
type CategoryType = {
  color?: 'primary' | 'error' | 'secondary' | 'success' | 'default' | 'info' | 'warning' | undefined
  label: string
}
const categories: CategoryType[] = [
  {
    label: 'All',
    color: 'primary'
  },
  {
    label: 'News',
    color: 'error'
  },
  {
    label: 'Insights',
    color: 'secondary'
  },
  {
    label: 'Success Stories',
    color: 'success'
  }
]
// const articles = [{}]
const index = (props: Props) => {
  const { title, articles } = props
  console.log(articles)
  return (
    <DefaultLayout>
      <Typography>{title}</Typography>
      <Panel
        title='Our thinking is where you can source'
        content='thought leadership articles, case studies, success stories, insights and other useful resources.'
        src='https://nashtechglobal.com/images/banner-ourthinking-1.webp'
        center
        hasButton={false}
        height={'50vh'}
      />
      <Stack direction={'row'} padding={8} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={4}>
          {categories.map((category) => (
            <Chip label={category.label} color={category.color} />
          ))}
        </Stack>
        <FormSearch />
      </Stack>
      <Grid container spacing={8} padding={8}>
        {articles.map((item) => (
          <Grid key={item.id} item md={4}>
            <Article data={item} />
          </Grid>
        ))}
        {/* <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid> */}
      </Grid>
    </DefaultLayout>
  )
}

export default index

export async function getStaticProps() {
  const res = await articleService.getAll()
  return {
    props: {
      title: 'Home page',
      articles: res.data
    }
  }
}
