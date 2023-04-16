import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { TextField, Button, Box, FormControlLabel, Checkbox } from '@material-ui/core'
import { Grid, Stack, Typography } from '@mui/material'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  const validateNoSpace = (value: string) => {
    if (value.indexOf(' ') >= 0) {
      return 'Không được chứa khoảng trắng'
    }
    return true
  }
  return (
    <Grid container minHeight='100vh'>
      <Grid
        item
        xs={12}
        md={4}
        border={'solid '}
        padding={8}
        margin={'auto'}
        alignItems='center'
        justifyContent='center'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h4' align='center'>
            LOG IN
          </Typography>
          <TextField
            id='username'
            label='Tên đăng nhập'
            fullWidth
            margin='normal'
            {...register('username', {
              required: 'Vui lòng nhập tên đăng nhập',
              minLength: {
                value: 6,
                message: 'Tên đăng nhập phải có độ dài tối thiểu 6 ký tự'
              },
              maxLength: {
                value: 12,
                message: 'Tên đăng nhập không được vượt quá 12 ký tự'
              },
              validate: validateNoSpace
            })}
          />
          {errors.username && (
            <Typography sx={{ color: 'red' }}>
              {typeof errors.username === 'string'
                ? errors.username
                : String(errors.username.message)}
            </Typography>
          )}
          <TextField
            id='password'
            label='Mật khẩu'
            type='password'
            fullWidth
            margin='normal'
            {...register('password', {
              required: 'Vui lòng nhập mật khẩu',
              minLength: {
                value: 8,
                message: 'Mật khẩu phải có độ dài tối thiểu 8 ký tự'
              },
              validate: validateNoSpace
            })}
          />
          {errors.password && (
            <Typography sx={{ color: 'red' }}>
              {typeof errors.password === 'string'
                ? errors.password
                : String(errors.password.message)}
            </Typography>
          )}
          <FormControlLabel
            control={<Checkbox name='remember' color='primary' />}
            label='Remember me'
          />
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Đăng nhập
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default LoginPage
