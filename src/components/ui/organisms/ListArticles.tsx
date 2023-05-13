import { ButtonOutline } from '@/ui/atom'
import { Article } from '@/ui/molecules'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Article as TArticle } from '@prisma/client'
import Link from 'next/link'
import * as React from 'react'

export interface IListArticlesProps {
  title?: string
  data?: TArticle[]
}

export default function ListArticles(props: IListArticlesProps) {
  const { title = 'News', data = [] } = props
  if (data.length <= 0) return null
  return (
    <Box padding={8}>
      <Typography variant='h4'>{title}</Typography>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={4}>
            <Article data={item} />
          </Grid>
        ))}
      </Grid>
      <Stack alignItems={'center'}>
        <ButtonOutline>
          <Link href={'/news'}>Explore More</Link>
        </ButtonOutline>
      </Stack>
    </Box>
  )
}
