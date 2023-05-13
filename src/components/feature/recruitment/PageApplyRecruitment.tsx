import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import {
  TextField,
  FormControl,
  Input,
  FormHelperText,
  Typography,
  styled,
  Box
} from '@mui/material'
import { useRouter } from 'next/router'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { ButtonNavbar } from '@/ui/atom'
import { emailService } from '@/service'
import { toBase64 } from '@/utils/toBase64'
import { ETypeSendMail } from '@/types'
import { toast } from 'react-toastify'
import error from 'next/error'

const PageApplyRecruitment = () => {
  const router = useRouter()
  const { id } = router.query
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    const content = {
      name: data.name,
      email: data.email,
      attachments: [
        {
          content: await toBase64(data.CV[0])
        }
      ],
      introduce: data.introduce,
      subject: 'CV of candidate',
      type: ETypeSendMail.recruitment
    }
    try {
      const res = await emailService.send(content)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DefaultLayout>
      <ContainerBox>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name='CV'
              control={control}
              defaultValue=''
              rules={{
                validate: (value) =>
                  value[0]?.type === 'application/pdf' || 'Vui lòng tải lên tập tin PDF!'
              }}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <>
                  <Input
                    type='file'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const inputElement = event.target as HTMLInputElement
                      if (!inputElement.files) {
                        return
                      }
                      const files = inputElement.files
                      return onChange(files)
                    }}
                  />
                  {error && (
                    <FormHelperText
                      sx={{
                        color: 'red'
                      }}
                    >
                      {error.message}
                    </FormHelperText>
                  )}
                </>
              )}
            />
            {/* <Input
              {...register('CV', { required: true })}
              id='CV'
              type='file'
              error={errors['CV'] ? true : false}
            />
            {errors['CV'] && <FormHelperText>Vui lòng tải lên tập tin của bạn</FormHelperText>} */}
          </FormControl>
          <TextField
            label='Tại sao bạn phù hợp với công việc này?'
            {...register('introduce', { required: true })}
            fullWidth
            margin='normal'
            multiline
            rows={4}
            error={errors['introduce'] ? true : false}
            helperText={errors['introduce'] ? 'Vui lòng điền thông tin' : ''}
          />
          <ButtonNavbar
            variant='contained'
            color='primary'
            type='submit'
            fullWidth
            sx={{
              maxWidth: '300px'
            }}
          >
            Gửi CV và ứng tuyển
          </ButtonNavbar>
        </FormContainer>
      </ContainerBox>
    </DefaultLayout>
  )
}

export default PageApplyRecruitment

const ContainerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem 1rem'
}))

const FormContainer = styled('form')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%'
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '50%'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: '70%'
  }
}))
