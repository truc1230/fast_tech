import { Solution } from '@/ui/molecules'
import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {
  title?: string
}
const OurSolutions = (props: Props) => {
  const { title } = props
  return (
    <Box marginY={8}>
      <Typography paddingBottom={8} textAlign={'center'} variant='h4' fontWeight={700}>
        {title || 'Our Solutions'}
      </Typography>
      <Grid container justifyContent={'center'} columnGap={8} rowGap={9}>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
        <Grid item xs={12} sm={5} md={3}>
          <Solution />
        </Grid>
      </Grid>
    </Box>
  )
}

export default OurSolutions
