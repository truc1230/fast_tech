import { Image } from '@/ui/atom'
import { MenuItem as MenuItemMui, IconButton, Box, Stack, Typography } from '@mui/material'
import * as React from 'react'

export interface IMenuItemProps {
  children: React.ReactNode
}

export default function MenuItem(props: IMenuItemProps) {
  return (
    <MenuItemMui className='h-[60px] p'>
      <Image
        src={'https://nashtechglobal.com/media/x5knlcox/news.svg'}
        width={'50px'}
        height={'50px'}
      />
      <Typography className='ml-2'> {props.children}</Typography>
    </MenuItemMui>
  )
}
