import SidebarAdmin from '@/ui/templates/layout/SidebarAdmin'
import { Box, Grid, Stack } from '@mui/material'

import * as React from 'react'

export interface IAdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout(props: IAdminLayoutProps) {
  return (
    <Grid container className='min-h-[1000px] ' spacing={4}>
      <Grid item md={3}>
        <SidebarAdmin />
      </Grid>
      <Grid item md={9}>
        {props.children}
      </Grid>
    </Grid>
  )
}
