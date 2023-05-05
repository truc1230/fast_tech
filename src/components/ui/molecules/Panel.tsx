import { ButtonOutline } from '@/ui/atom'
import { Box, Stack, Typography, StackProps } from '@mui/material'
import * as React from 'react'

export interface IPanelProps extends StackProps {
  title?: string
  content?: string
  action?: string
  src?: string
  center?: boolean
  hasButton?: boolean
}

export default function Panel(props: IPanelProps) {
  const { title, content, action, src, center = false, hasButton = true, ...rest } = props

  const propsCenter = {}
  return (
    <Stack
      justifyContent={'center'}
      alignItems={center ? 'center' : ''}
      textAlign={center ? 'center' : 'start'}
      height={'70vh'}
      {...rest}
      sx={{
        backgroundImage: `url(${
          src ||
          'https://dictionary.cambridge.org/vi/images/thumb/white_noun_004_2763.jpg?version=5.0.312'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Stack
        justifyContent={'center'}
        alignItems={center ? 'center' : ''}
        width={6 / 8}
        padding={8}
      >
        <Typography
          fontWeight={700}
          lineHeight={'1.875rem'}
          fontSize={'clamp(1.25rem,calc(1rem + 1.5vw), 2.5rem)'}
          variant='h4'
          color={'primary.main'}
        >
          {title || 'Our experts can help!'}
        </Typography>
        <Typography
          variant='h4'
          fontWeight={700}
          fontSize={'clamp(1.25rem,calc(1rem + 1.5vw), 2.5rem)'}
          sx={{
            backgroundImage: 'linear-gradient(to right, purple, red)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {content ||
            `We help you understand your technology journey, navigate the complex world of data,
          digitise business process or provide a seamless user experience`}
        </Typography>

        {hasButton && <ButtonOutline>Explore Our Solution</ButtonOutline>}
      </Stack>
    </Stack>
  )
}
