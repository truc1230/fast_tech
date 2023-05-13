import { SearchIcon } from '@/components/icon'
import { ButtonOutline } from '@/ui/atom'
import { InputBase, Stack, StackProps } from '@mui/material'
import React, { useState } from 'react'

type Props = {
  placeholder?: string
  onSubmit?: (value: string) => void
  textSearch?: string
  setTextSearch?: React.Dispatch<React.SetStateAction<string>>
} & StackProps

const FormSearch = (props: Props) => {
  const { placeholder = 'Search everything', textSearch = '', setTextSearch = () => {} } = props
  return (
    <Stack alignItems={'center'} direction={'row'} {...props}>
      <InputBase
        className='pl-3 bg-transparent text-gray-500 outline-none py-2 border-b-2 border-b-black focus-within:border-b-2 focus-within:border-b-blue-500'
        placeholder='Search...'
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
          setTextSearch(e.target.value)
        }
        value={textSearch}
        endAdornment={<SearchIcon sx={{ ml: 1, cursor: 'pointer' }} />}
      />
    </Stack>
  )
}

export default FormSearch
