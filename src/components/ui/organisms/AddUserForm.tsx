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
  RadioGroup,
  Radio,
  Typography
} from '@mui/material'
import { useRouter } from 'next/router'
import { FormUser } from '@/types'

type Props = {
  open: boolean
  onClose: () => void
  user?: FormUser
  onSubmit: (data: FormUser) => void
}

const AddUserForm = (props: Props) => {
  const { open, onClose, onSubmit: handleSubmitAdd } = props
  const router = useRouter()

  const id = router.query.id

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({})

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (id) data.id = id
    handleSubmitAdd(data)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          reset()
          onClose()
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
              {...register('name')}
              error={errors.name ? true : false}
              helperText={
                errors.name
                  ? typeof errors.name === 'string'
                    ? errors.name
                    : errors.name.message?.toString() || ''
                  : ''
              }
            />
            <TextField
              margin='dense'
              id='username'
              label='Username'
              type='text'
              fullWidth
              {...register('username')}
              error={errors.username ? true : false}
              helperText={
                errors.username
                  ? typeof errors.username === 'string'
                    ? errors.username
                    : errors.username.message?.toString() || ''
                  : ''
              }
            />
            <Typography className='pt-[14px]'>Role:</Typography>
            <RadioGroup aria-label='role' {...register('role')}>
              <FormControlLabel value='ADMIN' control={<Radio />} label='Admin' />
              <FormControlLabel value='USER' control={<Radio />} label='User' />
            </RadioGroup>
            {errors.role && <span className='text-red-500 text-sm'>{errors.role?.message?.toString()}</span>}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                reset()
                onClose()
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
    </>
  )
}

export default AddUserForm
