import { EllipsisTypography, Image } from '@/ui/atom'
import { Chip, Stack, Typography } from '@mui/material'
import { Article } from '@prisma/client'
import * as React from 'react'
import moment from 'moment'
import Link from 'next/link'

type Props = {
  data?: Article
}

export default function Article(props: Props) {
  const { data } = props
  return (
    <Link href={`/news/${data?.slug}`}>
      <Stack
        padding={4}
        boxShadow={2}
        borderRadius={3}
        spacing={4}
        className='hover:text-purple-400'
      >
        <Image width='' src={'https://picsum.photos/300/200'} height={''} />
        <EllipsisTypography
          fontSize={'calc(0.75rem + 0.5vw)'}
          variant='h5'
          text={
            data?.title ||
            `NashTech launches world’s largest Digital Leadership Report at exclusive event
          in Manchester`
          }
        />
        <Stack direction={'row'} spacing={4}>
          <Chip label='News' color='primary' />
          <Typography color={'primary'}>{moment(data?.createdAt).format('DD MMM YYYY')}</Typography>
        </Stack>
      </Stack>
    </Link>
  )
}
