import SidebarAdmin from '@/ui/templates/layout/SidebarAdmin'
import { Box, Grid, Stack, styled } from '@mui/material'
import { height } from '@mui/system'

import * as React from 'react'

export interface IAdminLayoutProps {
  children: React.ReactNode
}
const ContainerBox = styled(Box)({
  overflow: 'auto',
  height: '100vh',
  padding: '0 18px',
  marginTop: '30px'
  
})

export default function AdminLayout(props: IAdminLayoutProps) {
  return (
    <Grid container height={'100vh'}>
      <Grid item md={3} bgcolor='transparent' zIndex={999} xs={0} boxShadow={1}>
        <SidebarAdmin />
      </Grid>
      <Grid item xs boxShadow={2}>
        <ContainerBox> {props.children}</ContainerBox>
      </Grid>
    </Grid>
  )
}
