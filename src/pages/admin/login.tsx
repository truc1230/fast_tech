import React from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import {
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import { ButtonNavbar } from '@/ui/atom'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const { data: session } = useSession()
  const router = useRouter()
  if (session) {
    router.push('/admin')
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const status = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/admin'
    })
    console.log(status)
    if (status?.ok) router.push(status?.url)
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
                value: 6,
                message: 'Mật khẩu phải có độ dài tối thiểu 6 ký tự'
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
          <ButtonNavbar type='submit' variant='contained' fullWidth>
            Đăng nhập
          </ButtonNavbar>
        </form>
      </Grid>
    </Grid>
  )
}

export default LoginPage
