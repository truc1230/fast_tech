import React from 'react'
import { Typography, TypographyProps } from '@mui/material/'

type Props = {
  text: string
  WebkitLineClamp?: string
} & TypographyProps

const EllipsisTypography = (props: Props) => {
  const { text, WebkitLineClamp = '2', ...rest } = props
  return (
    <Typography
      {...rest}
      sx={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp,
        WebkitBoxOrient: 'vertical'
      }}
    >
      {text}
    </Typography>
  )
}

export default EllipsisTypography
