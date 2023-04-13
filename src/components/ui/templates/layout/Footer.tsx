import { FormRegister } from '@/ui/molecules'
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  TextField,
  ListItemText,
  Stack,
  Typography,
  Divider
} from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
// import
export interface IFooterProps {}
export const MENU_ITEMS = [
  {
    title: 'Solution',
    children: {
      data: [
        {
          title: 'Item Description 1',
          to: 'description1'
        },
        {
          title: 'Item Description 1',
          to: 'description1'
        },
        {
          title: 'Item Description 1',
          to: 'description1'
        }
      ]
    }
  },
  {
    title: 'Solution2',
    children: {
      data: [
        {
          title: 'Item Description 1',
          to: 'description2'
        },
        {
          title: 'Item Description 1',
          to: 'description2'
        },
        {
          title: 'Item Description 1',
          to: 'description2'
        }
      ]
    }
  },
  {
    title: 'Solution3',
    children: {
      data: [
        {
          title: 'Item Description 1',
          to: 'description3'
        },
        {
          title: 'Item Description 1',
          to: 'description3'
        },
        {
          title: 'Item Description 1',
          to: 'description3'
        }
      ]
    }
  }
]

export default function Footer(props: IFooterProps) {
  return (
    <Grid container padding={8} bgcolor={'black'} color={'white'}>
      <Grid container item md={8} spacing={4}>
        {MENU_ITEMS.map((item, index) => (
          <Grid key={index} item md={3} xs={4}>
            <Typography>{item.title}</Typography>
            <List>
              {item.children.data.map((child, idx) => (
                <Link
                  key={idx}
                  href={child.to}
                  passHref
                  className='text-sm hover:text-white text-gray-500'
                >
                  <ListItem>{child.title}</ListItem>
                </Link>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
      <Grid item md={4}>
        <Typography variant='h4'>Stay in the know with our newsletter</Typography>
        <FormRegister />
      </Grid>
      <Grid item md={12} className='pt-4 border-t-2 mt-4 '>
        <Typography>2023 Fast Tech</Typography>
        <Typography>Part of Nash Squared.</Typography>
      </Grid>
    </Grid>
  )
}
