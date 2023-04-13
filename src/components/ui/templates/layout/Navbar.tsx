import { IconButton, Stack, Typography } from '@mui/material'

import { KeyboardArrowDownIcon, SearchIcon } from '@/components/icon'
import { ButtonNavbar } from '@/ui/atom'
import { SectionButtonNavbar } from '@/ui/organisms'
import Link from 'next/link'

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
  return (
    <Stack
      className='h-20  w-[100vw] p-10 fixed top-0  shadow z-50 bg-white'
      direction={'row'}
      alignItems='center'
      justifyContent={'space-between'}
    >
      <Link href={''} passHref className='hover:'>
        <Typography
          variant='h4'
          fontWeight={700}
          fontSize={'36px'}
          sx={{
            backgroundImage: 'linear-gradient(to right, purple, red)',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Fast Tech
        </Typography>
      </Link>
      <Stack direction={'row'} justifyContent='space-around' spacing={4}>
        {MENU_ITEMS.map((item) => (
          <SectionButtonNavbar
            sub={item.children}
            icon={<KeyboardArrowDownIcon fontSize='small' />}
          >
            {item.title}
          </SectionButtonNavbar>
        ))}

        <IconButton>
          <SearchIcon />
        </IconButton>
        <ButtonNavbar>Get in touch</ButtonNavbar>
      </Stack>
    </Stack>
  )
}

export default Navbar
