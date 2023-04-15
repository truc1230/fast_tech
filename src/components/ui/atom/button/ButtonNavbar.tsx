import { Button, ButtonProps } from '@mui/material'
import * as React from 'react'
export interface IButtonNavbarProps extends ButtonProps {
  children: React.ReactNode
}

export default function ButtonNavbar(props: IButtonNavbarProps) {
  return (
    <Button className='bg-red-600 hover:bg-red-700 px-8' variant='contained' size='medium' {...props}>
      {props.children}
    </Button>
  )
}
