import { Image } from '@/ui/atom'
import { Box, Stack, Typography } from '@mui/material'
import { title } from 'process'
import * as React from 'react'

type Props = {
  title?: string
  description?: string
  image?: string
}

export default function CardTitle(props: Props) {
  const { title, description, image, ...rest } = props

  return (
    <Stack
      direction={'column'}
      sx={{
        backgroundColor: '#f5f6f8 '
      }}
    >
      <Box
        position={'relative'}
        display={'block'}
        sx={{
          backgroundImage: `url(${
            image ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjDlXUfT41nAkApex3eYC40w-oX2VhGou3bZXPyyrGtTOW3eCD'
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        height={'30vh'}
      >
        <Box
          position={'absolute'}
          paddingX={7}
          paddingY={3}
          textAlign={'center'}
          sx={{
            backgroundColor: '#f5f6f7',
            transform: 'translateY(20%)  ',
            inset: '70% 10% auto 10%'
          }}
        >
          <Typography
            variant='h4'
            display={'inline'}
            fontWeight={700}
            fontSize={'clamp(1.25rem,calc(1.25rem + 1.5vw), 2.5rem)'}
            sx={{
              backgroundImage: 'linear-gradient(to right, purple, red)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {title || `We help you understand your technology journey`}
          </Typography>
        </Box>
      </Box>
      <Box className='pt-11 px-5 pb-14 md:px-20'>
        <Typography textAlign={'center'} variant='body2'>
          {description ||
            `
          How can you organically grow with competing demands for your money, resources, and
          executive attention? Established consumer and commercial banks, capital markets and
          fintech scale-ups all call on us to help them grow in the face of unprecedented
          disruption. The industry is in the middle of a perfect storm. Complex, accelerating forces
          are transforming the value chain of every financial market.`}
        </Typography>
      </Box>
    </Stack>
  )
}
