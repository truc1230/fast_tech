import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { ButtonNavbar } from '@/ui/atom'

const ApplicationForm = () => {
  const router = useRouter()
  const { id } = router.query
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '70%' }}>
        <Typography variant='h5'>Ứng tuyển</Typography>
        <TextField
          label='Họ và tên'
          {...register('name', { required: true })}
          fullWidth
          margin='normal'
          error={errors.name ? true : false}
          helperText={errors.name ? 'Họ và tên không được để trống' : ''}
        />
        <TextField
          label='Email'
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          })}
          fullWidth
          margin='normal'
          error={errors.email ? true : false}
          helperText={errors.email ? 'Vui lòng nhập địa chỉ email hợp lệ' : ''}
        />
        <FormControl fullWidth margin='normal'>
          <Typography paddingBottom={3}>Tải lên tập tin của bạn</Typography>
          <Input
            {...register('CV', { required: true })}
            id='CV'
            type='file'
            error={errors['CV'] ? true : false}
          />
          {errors['CV'] && <FormHelperText>Vui lòng tải lên tập tin của bạn</FormHelperText>}
        </FormControl>
        <TextField
          label='Tại sao bạn phù hợp với công việc này?'
          {...register('why-you-suitable-for-job', { required: true })}
          fullWidth
          margin='normal'
          multiline
          rows={4}
          error={errors['why-you-suitable-for-job'] ? true : false}
          helperText={errors['why-you-suitable-for-job'] ? 'Vui lòng điền thông tin' : ''}
        />
        <ButtonNavbar variant='contained' color='primary' type='submit' fullWidth>
          Gửi CV và ứng tuyển
        </ButtonNavbar>
      </form>
    </DefaultLayout>
  )
}

export default ApplicationForm
