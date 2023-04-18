import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Typography
} from '@mui/material'
import { useControlPopup } from '@/components/hooks/useControlPopup'

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const {
    open: openContactForm,
    handleOpen: handleOpenContactForm,
    handleClose: handleCloseContactForm
  } = useControlPopup()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <Dialog
        open={openContactForm}
        onClose={() => {
          reset()
          handleCloseContactForm()
        }}
        aria-labelledby='form-dialog-title'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id='form-dialog-title'>ADD USER</DialogTitle>
          <DialogContent>
            <TextField
              margin='dense'
              id='name'
              label='Name'
              type='text'
              fullWidth
              {...register('name', { required: 'Vui lòng nhập tên' })}
              error={errors.name ? true : false}
              helperText={
                errors.name
                  ? typeof errors.name === 'string'
                    ? errors.name
                    : errors.name?.message.toString()
                  : ''
              }
            />
            <TextField
              margin='dense'
              id='username'
              label='Username'
              type='text'
              fullWidth
              {...register('username', { required: 'Vui lòng nhập tên đăng nhập' })}
              error={errors.username ? true : false}
              helperText={
                errors.username
                  ? typeof errors.username === 'string'
                    ? errors.username
                    : errors.username?.message.toString()
                  : ''
              }
            />
            <Typography className='pt-[14px]'>Role:</Typography>
            <RadioGroup
              aria-label='role'
              {...register('role', { required: 'Vui lòng chọn vai trò' })}
            >
              <FormControlLabel value='ADMIN' control={<Radio />} label='Admin' />
              <FormControlLabel value='USER' control={<Radio />} label='User' />
            </RadioGroup>
            {errors.role && <span className='text-red-500 text-sm'>{errors.role?.message}</span>}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                reset()
                handleCloseContactForm()
              }}
              color='error'
            >
              Cancel
            </Button>
            <Button type='submit' color='success'>
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Button onClick={handleOpenContactForm}>Add User</Button>
    </>
  )
}

export default AddUserForm
