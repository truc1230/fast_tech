import { Button } from '@mui/material'
import * as React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { size } from '@/utils'

export interface IButtonOutlineProps {
  children: React.ReactNode
  className?: string
}

export default function ButtonOutline(props: IButtonOutlineProps) {
  return (
    <Button
      className={` hover:bg-red-600 px-8 hover:text-white  text-red-600  border-red-500 mt-4 w-fit ${props.className}`}
      variant='outlined'
      size='medium'
    >
      {props.children}
      <ArrowForwardIcon />
    </Button>
  )
}
