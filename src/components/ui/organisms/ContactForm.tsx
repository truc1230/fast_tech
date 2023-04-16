import { useState, ChangeEvent, FormEvent } from 'react'
import { TextField, Grid, Typography, TextareaAutosize } from '@mui/material'
import { ButtonNavbar, FieldSelect } from '@/ui/atom'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
    // send data to server here
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='name'
            label='Tên'
            fullWidth
            {...register('name', { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldSelect
            labelId='address-label'
            id='address'
            title='Address'
            {...register('address', { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='email'
            label='Email'
            fullWidth
            {...register('email', { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Yêu cầu của bạn</Typography>
          <TextareaAutosize
            placeholder='Viết gì đó vào đây'
            id='message'
            style={{
              width: '100%',
              resize: 'none',
              border: 'none',
              outline: 'none',
              borderBottom: '1px solid black'
            }}
            className='border-b border-gray-400 hover:border-blue-500 hover:outline-none'
            {...register('message', { required: true })}
            minRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonNavbar type='submit' variant='contained' color='primary'>
            Gửi
          </ButtonNavbar>
        </Grid>
      </Grid>
    </form>
  )
}
