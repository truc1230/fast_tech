import SidebarAdmin from '@/ui/templates/layout/SidebarAdmin'
import { Box, Grid, Stack } from '@mui/material'

import * as React from 'react'

export interface IAdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout(props: IAdminLayoutProps) {
  return (
    <Grid container height={'100vh'}>
      <Grid item md={3} bgcolor='transparent' zIndex={999} xs={0} boxShadow={1}>
        <SidebarAdmin />
      </Grid>
      <Grid item xs boxShadow={2} >
        {props.children}
      </Grid>
    </Grid>
  )
}
