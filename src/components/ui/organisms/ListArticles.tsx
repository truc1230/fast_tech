import { Box, Grid, Typography } from '@mui/material'
import * as React from 'react'
import Article from '../molecules/Article'

export interface IListArticlesProps {}

export default function ListArticles(props: IListArticlesProps) {
  return (
    <Box padding={8}>
      <Typography variant='h4'>News</Typography>
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
    </Box>
  )
}
