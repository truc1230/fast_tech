import { adminRoutes } from '@/config'
import { MenuItemIcon } from '@/ui/molecules'
import { Drawer, Stack, Typography, MenuItem, ListItem, Divider } from '@mui/material'
import Link from 'next/link'
import React, { Fragment } from 'react'

type Props = {}

const SidebarAdmin = (props: Props) => {
  return (
    <Stack className=' px-8 py-5 fixed h-screen shadow-md' spacing={2}>
      {adminRoutes.map((route, index) => {
        const Div = index === adminRoutes.length - 1 ? Divider : Fragment
        return (
          <div key={route.title}>
            <Div />
            <Link href={route.to}>
              <MenuItemIcon icon={route.icon} className='px-8 py-4'>
                {route.title}
              </MenuItemIcon>
            </Link>
          </div>
        )
      })}
    </Stack>
  )
}

export default SidebarAdmin
