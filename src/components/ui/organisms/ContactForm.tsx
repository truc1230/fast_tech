import { useState, ChangeEvent, FormEvent } from 'react'
import { TextField, Grid, Typography, TextareaAutosize } from '@mui/material'
import { ButtonNavbar, FieldSelect } from '@/ui/atom'

interface FormState {
  name: string
  address: string
  email: string
  message: string
}

const initialFormState: FormState = {
  name: '',
  address: '',
  email: '',
  message: ''
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialFormState)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>
  ) => {
    const name = event.target.name
    const value = event.target.value
    setFormState({ ...formState, [name]: value as string })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formState)
    // send data to server here
    setFormState(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='name'
            name='name'
            label='Tên'
            fullWidth
            value={formState.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FieldSelect
            labelId='address-label'
            id='address'
            name='address'
            value={formState.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='email'
            name='email'
            label='Email'
            fullWidth
            value={formState.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Yêu cầu của bạn</Typography>
          <TextareaAutosize
            placeholder='Viết gì đó vào đây'
            id='message'
            name='message'
            style={{
              width: '100%',
              resize: 'none',
              border: 'none',
              outline: 'none',
              borderBottom: '1px solid black'
            }}
            className='border-b border-gray-400 hover:border-blue-500 hover:outline-none'
            value={formState.message}
            onChange={handleChange}
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
