import { LogoutIcon } from '@/components/icon'
import { adminRoutes } from '@/config'
import { MenuItemIcon } from '@/ui/molecules'
import { Drawer, Stack, Typography, MenuItem, ListItem, Divider } from '@mui/material'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { Fragment } from 'react'

type Props = {}

const SidebarAdmin = (props: Props) => {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/admin/login' })
  }
  return (
    <Stack className=' px-8 py-5 fixed h-screen shadow-md' spacing={2}>
      {adminRoutes.map((route) => (
        <div key={route.title}>
          <Link href={route.to}>
            <MenuItemIcon icon={route.icon} className='px-8 py-4'>
              {route.title}
            </MenuItemIcon>
          </Link>
        </div>
      ))}
      <Divider />
      <MenuItemIcon onClick={handleSignOut} icon={LogoutIcon} className='px-8 py-4'>
        Sign Out
      </MenuItemIcon>
    </Stack>
  )
}

export default SidebarAdmin
