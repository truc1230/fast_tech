import { LogoutIcon, MenuOutlinedIcon } from '@/components/icon'
import { adminRoutes } from '@/config'
import { MenuItemIcon } from '@/ui/molecules'
import { Drawer, Divider, Box, Fab } from '@mui/material'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const SidebarAdmin = (props: Props) => {
  const [open, setOpen] = useState(false)
  const handleSignOut = () => {
    signOut({ callbackUrl: '/admin/login' })
  }
  return (
    <Box>
      <Box
        bottom={10}
        left={10}
        position={'fixed'}
        padding={2}
        display={{ xs: 'block', md: 'none' }}
      >
        <Fab onClick={() => setOpen(true)}>
          <MenuOutlinedIcon />
        </Fab>
      </Box>
      <Drawer variant='temporary' open={open} onClose={() => setOpen(false)}>
        <Box
          // position={'fixed'}
          display={{ xs: 'block', md: 'none' }}
        >
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
        </Box>
      </Drawer>
      <Box display={{ xs: 'none', md: 'block' }}>
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
      </Box>
    </Box>
  )
}

export default SidebarAdmin
