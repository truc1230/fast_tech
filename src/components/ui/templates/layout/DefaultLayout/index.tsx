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
      <Box className='w-full  mt-20 '>{props.children}</Box>
      <Footer />
    </Stack>
  )
}
