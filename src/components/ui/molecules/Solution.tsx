import { ArrowForwardIosIcon } from '@/components/icon'
import { EllipsisTypography, Image } from '@/ui/atom'
import { Stack, Typography } from '@mui/material'
import { red, purple } from '@mui/material/colors'
import { border } from '@mui/system'
import image from 'next/image'
import { title } from 'process'
import React from 'react'

type Props = {
  title?: string
  src?: string | null
  description?: string
}

const Solution = (props: Props) => {
  const { description, title, src } = props
  return (
    <Stack
      // maxWidth={'30vw'}
      // minWidth={'300px'}
      minHeight={'200px'}
      padding={'20px 32px 28px'}
      className='shadow'
      sx={{
        border: 'transparent 3px solid',
        ':hover': {
          border: '3px solid',
          borderImage: 'linear-gradient(to right, red, purple)',
          borderImageSlice: 1,
          cursor: 'pointer'
        }
      }}
    >
      <Stack
        paddingBottom={3}
        justifyContent={'space-between'}
        spacing={4}
        direction={'row'}
        alignItems={'center'}
      >
        {/* <Image
          src={src || 'https://nashtechglobal.com/media/x5knlcox/news.svg'}
          width={'60px'}
          height={'60px'}
        /> */}
        <EllipsisTypography fontWeight={700} variant='h5' text={title || 'Data Analytics and Ai'} />
        <ArrowForwardIosIcon fontSize='small' />
      </Stack>
      <EllipsisTypography
        WebkitLineClamp={'3'}
        text={
          description ||
          'We offer end to end application development to accelerate digital innovation and ensure business growth'
        }
      />
    </Stack>
  )
}

export default Solution
