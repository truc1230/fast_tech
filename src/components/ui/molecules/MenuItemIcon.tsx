import { MenuItem, MenuItemProps, Typography } from '@mui/material'
import * as React from 'react'

type Props = {
  children: React.ReactNode
  icon?: React.ElementType
} & MenuItemProps

export default function MyMenuItem({ children, icon: Icon, ...rest }: Props) {
  return (
    <MenuItem className='h-[60px] p-0' {...rest}>
      {Icon && <Icon />}
      <Typography className='ml-2'>{children}</Typography>
    </MenuItem>
  )
}
