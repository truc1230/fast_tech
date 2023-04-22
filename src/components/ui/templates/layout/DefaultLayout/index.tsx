import Footer from '@/ui/templates/layout/Footer'
import Navbar from '@/ui/templates/layout/Navbar'
import { Box, Stack } from '@mui/material'

import * as React from 'react'

export interface IDefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout(props: IDefaultLayoutProps) {
  return (
    <Stack justifyContent={'center'} alignItems='center'>
      <Navbar />
      <Box className='min-h-[1000px] mt-20 max-w-[1000px]'>{props.children}</Box>
      <Footer />
    </Stack>
  )
}
