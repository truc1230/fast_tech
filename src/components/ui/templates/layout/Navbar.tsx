import { IconButton, Stack, Typography } from '@mui/material'

import { KeyboardArrowDownIcon, SearchIcon } from '@/components/icon'
import { ButtonNavbar } from '@/ui/atom'
import { SectionButtonNavbar } from '@/ui/organisms'

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
      <Typography variant='h4'>Fast Tech</Typography>
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
