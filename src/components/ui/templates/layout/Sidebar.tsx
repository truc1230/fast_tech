import { Box, Button, IconButton, Menu, Stack, Typography } from '@mui/material'
import * as React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Link from 'next/link'
import { MenuItem } from '@/ui/molecules'

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  return (
    <Stack className='shadow-xl px-4 py-5 fixed'>
      <Link href={'#title'} passHref style={{ border: 'none' }}>
        <Stack className='hover:text-red-500 hover:bg-transparent' direction={'row'} spacing={4}>
          <ArrowBackIcon />
          <Typography>Section</Typography>
        </Stack>
      </Link>
      <MenuItem>Description 1</MenuItem>
      <MenuItem>Description 1</MenuItem>
      <MenuItem>Description 1</MenuItem>
    </Stack>
  )
}
