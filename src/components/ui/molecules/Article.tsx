import { Image } from '@/ui/atom'
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
      <Stack spacing={4} className='hover:text-purple-400'>
        <Image
          width=''
          src={'https://nashtechglobal.com/media/nxhf45nq/dlr-2023-manchester.png'}
          height={''}
        />
        <Typography variant='h5'>
          {data?.title ||
            `NashTech launches world’s largest Digital Leadership Report at exclusive event
          in Manchester`}
        </Typography>
        <Stack direction={'row'} spacing={4}>
          <Chip label='News' color='primary' />
          <Typography color={'primary'}>{moment(data?.createdAt).format('DD MMM YYYY')}</Typography>
        </Stack>
      </Stack>
    </Link>
  )
}
