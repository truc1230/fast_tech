import { SearchIcon } from '@/components/icon'
import { ButtonOutline } from '@/ui/atom'
import { Stack, StackProps } from '@mui/material'
import React from 'react'

type Props = {
  placeholder?: string
} & StackProps

const FormSearch = (props: Props) => {
  const { placeholder = 'Search everything' } = props
  return (
    <Stack alignItems={'center'} direction={'row'} {...props}>
      <input
        placeholder={placeholder}
        className='pr-8 bg-transparent text-gray-500 outline-none py-2 border-b-2 border-b-black focus:border-b-2 focus:border-b-blue-500'
      />
      <SearchIcon />
    </Stack>
  )
}

export default FormSearch
