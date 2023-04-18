import { useState, ChangeEvent, FormEvent } from 'react'
import { TextField, Grid, Typography, TextareaAutosize, DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material'
import { ButtonNavbar, FieldSelect } from '@/ui/atom'
import { useForm } from 'react-hook-form'
import { useControlPopup } from '@/components/hooks/useControlPopup'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const onSubmit = (data: any) => {
    console.log(data)
    // send data to server here
    reset()
    handleCloseContactForm()
  }
  const {
    open: openContactForm,
    handleOpen: handleOpenContactForm,
    handleClose: handleCloseContactForm
  } = useControlPopup()

  return (
    <>
      <Dialog open={openContactForm} onClose={()=>{
        reset()
        handleCloseContactForm()
      }}>
        <DialogTitle className='text-[26px] text-center'>Contact Form</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} paddingTop={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id='name'
                  label='Tên'
                  fullWidth
                  {...register('name', { required: 'Vui lòng nhập tên'})}
                  error={Boolean(errors.name)}
                  helperText={errors.name ? `${errors.name.message}` : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldSelect
                  labelId='address-label'
                  id='address'
                  title='Address'
                  {...register('address', { required: 'Vui lòng chọn địa chỉ' })}    
                  error={Boolean(errors.address)}
                />
                {errors.address && (
                    <Typography sx={{ color: 'red', fontSize: '13px'}}>
                      {typeof errors.address === 'string'
                        ? errors.address
                        : String(errors.address.message)}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='email'
                  label='Email'
                  fullWidth
                  {...register('email', { required: 'Vui lòng nhập email',
                    pattern: {
                      value: EMAIL_REGEX,
                      message: 'Địa chỉ email không hợp lệ'
                    }
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email ? `${errors.email.message}` : ''}
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
              <DialogActions>
                  <ButtonNavbar type='submit' variant='contained' color='primary' fullWidth >
                    Gửi
                  </ButtonNavbar>
              </DialogActions>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
      <ButtonNavbar onClick={handleOpenContactForm}>Get in touch</ButtonNavbar>
    </>
  )
}
