import { Chip, Stack, Typography } from '@mui/material'
import * as React from 'react'
import Image from '../atom/Image'

export interface IArticleProps {}

export default function Article(props: IArticleProps) {
  return (
    <Stack spacing={4} className='hover:text-purple-400'>
      <Image
        width=''
        src={'https://nashtechglobal.com/media/nxhf45nq/dlr-2023-manchester.png'}
        height={''}
      />
      <Typography variant='h5'>
        NashTech launches world’s largest Digital Leadership Report at exclusive event in Manchester
      </Typography>
      <Stack direction={'row'} spacing={4}>
        <Chip label='News' color='primary' />
        <Typography color={'primary'}>Apr 12, 2023</Typography>
      </Stack>
    </Stack>
  )
}
