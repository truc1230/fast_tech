import { IconButton, Typography, Stack } from '@mui/material'

import { SearchIcon } from '@/components/icon'
import { ButtonNavbar } from '@/ui/atom'
import { SectionButtonNavbar } from '@/ui/organisms'
import Link from 'next/link'
import { ContactForm } from '@/ui/organisms'
import React from 'react'
import { Modal } from '@/ui/molecules'
import { MenuNavbar } from '@/ui/molecules/'
import { useControlPopup } from '@/components/hooks'

export const MENU_ITEMS = [
  {
    title: 'Our Solution',
    children: {
      title: 'Our Solution',
      data: [
        {
          title: 'Item Description 1'
        },
        {
          title: 'Item Description 1'
        },
        {
          title: 'Item Description 1'
        }
      ]
    }
  },
  {
    title: 'Our Solution',
    children: {
      title: 'Language',
      data: [
        {
          title: 'Item Description 1'
        },
        {
          title: 'Item Description 1'
        },
        {
          title: 'Item Description 1'
        }
      ]
    }
  },
  {
    title: 'Our Solution',
    children: {
      title: 'Language',
      data: [
        {
          title: 'Item Description 1'
        },
        {
          title: 'Item Description 1'
        },
        {
          title: 'Item Description 1'
        }
      ]
    }
  }
]

function Navbar() {
  const {
    open: openContactForm,
    handleOpen: handleOpenContactForm,
    handleClose: handleCloseContactForm
  } = useControlPopup()
  return (
    <Stack
      className='h-20  w-[100vw] p-10 fixed top-0  shadow z-50 bg-white'
      direction={'row'}
      alignItems='center'
      justifyContent={'space-between'}
    >
      <Link href={'/'} passHref>
        <Typography
          variant='h4'
          fontWeight={700}
          fontSize={'36px'}
          sx={{
            backgroundImage: 'linear-gradient(to right, purple, red)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Fast Tech
        </Typography>
      </Link>

      <Stack
        direction={'row'}
        // flexWrap={'wrap'}
        className='lg:flex-row-reverse'
        justifyContent='space-around'
        spacing={4}
      >
        {/*  Old menu item */}
        {/* <Stack direction={'row'} justifyContent='space-around' spacing={4}>
        {MENU_ITEMS.map((item, idx) => (
          <SectionButtonNavbar
            key={idx}
            sub={item.children}
            icon={<KeyboardArrowDownIcon fontSize='small' />}
          >
            {item.title}
          </SectionButtonNavbar>
        ))} */}

        <MenuNavbar onOpenContactForm={handleOpenContactForm} />
      </Stack>

      <Modal
        onClose={handleCloseContactForm}
        children={<ContactForm />}
        open={openContactForm}
        width={6 / 8}
      />
    </Stack>
  )
}

export default Navbar
