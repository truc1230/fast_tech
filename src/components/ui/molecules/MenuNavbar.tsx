import { MenuOutlinedIcon } from '@/components/icon'
import { guestRouter } from '@/config'
import { Stack, MenuItem, Drawer, IconButton, Box } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const MenuNavbar = (props: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Stack direction={'row'} spacing={2} className='hidden lg:flex '>
        {guestRouter.map((item) => (
          <Link key={item.to} href={item.to}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        ))}
      </Stack>
      <IconButton className=' lg:hidden' onClick={() => setOpen(true)}>
        <MenuOutlinedIcon />
      </IconButton>
      <Drawer anchor='right' variant='temporary' open={open} onClose={() => setOpen(false)}>
        <Box display={'block'} padding={5}>
          {guestRouter.map((item) => (
            <Link key={item.to} href={item.to}>
              <MenuItem>
                <Box display={'block'} padding={3}>
                  {item.title}
                </Box>
              </MenuItem>
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  )
}

export default MenuNavbar
