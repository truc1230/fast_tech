import { FormControl, Input, TextField } from '@mui/material'
import * as React from 'react'
import ButtonOutline from '../atom/button/ButtonOutline'

export interface IFormRegisterProps {}

export default function FormRegister(props: IFormRegisterProps) {
  return (
    <FormControl fullWidth>
      <input
        placeholder='Your Email Address'
        className='bg-black text-gray-500 outline-none py-2 border-b-2 border-b-white focus:border-b-2 focus:border-b-green-500'
      />
      <ButtonOutline className='mt-4 w-fit border-white text-white'>Sign Up</ButtonOutline>
    </FormControl>
  )
}
