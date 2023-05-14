import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { FormUser, TypeId } from '@/types'

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: () => void
  title: string
  description: string
}

const DialogConfirm = (props: Props) => {
  const { open, onClose, onSubmit, title, description } = props
  const router = useRouter()
  const handleSubmit = () => {
    onSubmit()
    onClose()
  }
  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent>{description}</DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='error'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='success'>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogConfirm
