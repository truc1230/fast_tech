import { ButtonOutline } from '@/ui/atom'
import { Article } from '@/ui/molecules'
import { Box, Grid, Stack, Typography } from '@mui/material'
import * as React from 'react'

export interface IListArticlesProps {
  title?: string
}

export default function ListArticles(props: IListArticlesProps) {
  const { title = 'News' } = props
  return (
    <Box padding={8}>
      <Typography variant='h4'>{title}</Typography>
      <Grid container spacing={8}>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
        <Grid item md={4}>
          <Article />
        </Grid>
      </Grid>
      <Stack alignItems={'center'}>
        <ButtonOutline>Explore More</ButtonOutline>
      </Stack>
    </Box>
  )
}
