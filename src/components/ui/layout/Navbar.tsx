import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SectionButtonNavbar from '../organisms/SectionButtonNavbar'
import ButtonNavbar from '../atom/button/ButtonNavbar'
import SearchIcon from '@mui/icons-material/Search'
import ButtonOutline from '../atom/button/ButtonOutline'

const convertTitleToHref = (inputString: string) => {
  return '/' + inputString.toLowerCase().replace(/\s+/g, '-')
}
const MENU_ITEMS = [
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
      className='h-20 max-w-[1200px] w-[100vw]'
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
