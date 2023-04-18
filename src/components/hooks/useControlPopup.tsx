import React from 'react'

export const useControlPopup = () => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return {
    open,
    handleOpen,
    handleClose
  }
}
export type TypeControlPopupTools = {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
}
