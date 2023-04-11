import { Button } from '@mui/material'
import * as React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export interface IButtonOutlineProps {
  children: React.ReactNode
}

export default function ButtonOutline(props: IButtonOutlineProps) {
  return (
    <Button
      className=' hover:bg-red-600 px-8 hover:text-white text-red-600'
      variant='outlined'
      size='medium'
    >
      {props.children}
      <ArrowForwardIcon />
    </Button>
  )
}
