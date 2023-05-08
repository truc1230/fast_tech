import { getArticles } from '@/pages/api/articles'
import { articleService } from '@/service'
import { QueryParams } from '@/types'
import { Article, FormSearch, Panel } from '@/ui/molecules'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Chip, Grid, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import { Article as TArticles } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type Props = {
  articles: TArticles[]
  total: number
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
  const LIMIT = 1

const index = (props: Props) => {
  const { articles, total } = props
  const router = useRouter()
  const page = router.query.page || 1
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: any) => {
    // router.push(`/news/?page=${value}`, undefined, { shallow: false })
    router.push({
      pathname: '/news',
      query: { ...router.query, page: value }
    })
    {console.log(typeof value)}
    {console.log( value)}
  }
  return (
    <DefaultLayout>
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
      </Grid>
      <Stack alignItems='center'>
        <Pagination
          page={page as number}
          count={total % LIMIT == 0 ? total / LIMIT : Math.ceil(total / LIMIT)}
          size='large'
          variant="outlined" 
          color='secondary'
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </DefaultLayout>
  )
}

export default index

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const page = query?.page || 1
  console.log('page', page)
  console.log('query', query)
  const queryParams: QueryParams<TArticles> = {
    limit: LIMIT,
    page: page as number
  }
  const res = await getArticles(queryParams)
  return {
    props: {
      articles: JSON.parse(JSON.stringify(res.data)),
      total: res.total
    }
  }
}
