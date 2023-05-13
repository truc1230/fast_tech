import { Solution } from '@/ui/molecules'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Solution as TSolution } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

type Props = {
  title?: string
  data: TSolution[]
}
const OurSolutions = (props: Props) => {
  const { title, data = [] } = props
  return (
    <Box marginY={8}>
      <Typography paddingBottom={8} textAlign={'center'} variant='h4' fontWeight={700}>
        {title || 'Our Solutions'}
      </Typography>
      <Grid container justifyContent={'center'} columnGap={8} rowGap={9}>
        {data.map((item) => (
          <Grid key={item.id} item xs={12} sm={5} md={3}>
            <Link href={`/our-solution/${item.slug}`} passHref>
              <Solution
                description={item.description}
                src={item.image as string}
                title={item.title}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default OurSolutions
