import { MenuOutlinedIcon } from '@/components/icon'
import { guestRouter } from '@/config'
import { ButtonNavbar } from '@/ui/atom'
import { Stack, MenuItem, Drawer, IconButton, Box, Modal } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  onOpenContactForm: () => void
}

const MenuNavbar = (props: Props) => {
  const { onOpenContactForm } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <Stack direction={'row'} spacing={2} className='hidden lg:flex '>
        {guestRouter.map((item) => (
          <Link key={item.to} href={item.to}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        ))}
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <ButtonNavbar onClick={onOpenContactForm}>Get in touch</ButtonNavbar>
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
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}
          <ButtonNavbar onClick={onOpenContactForm}>Get in touch</ButtonNavbar>
        </Box>
      </Drawer>
    </>
  )
}

export default MenuNavbar
