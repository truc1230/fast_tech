import { Box, Stack } from '@mui/material'
import Navbar from '../Navbar'

import * as React from 'react'
import Footer from '../Footer'

export interface IDefaultLayoutProps {
  children: React.ReactNode
}

export default function DefaultLayout(props: IDefaultLayoutProps) {
  return (
    <Stack justifyContent={'center'} alignItems='center' >
      <Navbar />
      <Box className='min-h-[1000px] mt-20'>{props.children}children</Box>
      <Footer />
    </Stack>
  )
}
