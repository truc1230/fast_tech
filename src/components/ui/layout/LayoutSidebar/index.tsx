import { Stack, Box, ListItem, Grid } from '@mui/material'
import * as React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
export interface ILayoutSidebarProps {
  children: React.ReactNode
}

export default function LayoutSidebar(props: ILayoutSidebarProps) {
  return (
    <Stack justifyContent={'center'} alignItems='center'>
      <Navbar />
      <Grid container className='min-h-[1000px] mt-20 p-8' spacing={4}>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item md={9}>
          {props.children}children
        </Grid>
      </Grid>
      <Footer />
    </Stack>
  )
}
