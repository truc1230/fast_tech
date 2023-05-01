import { SearchIcon } from '@/components/icon'
import { ButtonOutline } from '@/ui/atom'
import { InputBase, Stack, StackProps } from '@mui/material'
import React from 'react'

type Props = {
  placeholder?: string
} & StackProps

const FormSearch = (props: Props) => {
  const { placeholder = 'Search everything' } = props
  return (
    <Stack alignItems={'center'} direction={'row'} {...props}>
      <InputBase
        className='pl-3 bg-transparent text-gray-500 outline-none py-2 border-b-2 border-b-black focus-within:border-b-2 focus-within:border-b-blue-500'
        placeholder='Search...'
        endAdornment={<SearchIcon sx={{ ml: 1, cursor: 'pointer' }} />}
      />
    </Stack>
  )
}

export default FormSearch
