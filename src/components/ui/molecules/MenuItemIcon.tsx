import { MenuItem, MenuItemProps, Typography } from '@mui/material'
import * as React from 'react'

type Props = {
  children: React.ReactNode
  icon?: React.ReactElement
} & MenuItemProps

export default function MyMenuItem({ children, icon, ...rest }: Props) {
  const Icon = icon

  return (
    <MenuItem className='h-[60px] p-0' {...rest}>
      {icon ? <Icon /> : null}
      <Typography className='ml-2'>{children}</Typography>
    </MenuItem>
  )
}
