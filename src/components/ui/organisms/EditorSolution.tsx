import { ArrowBackIcon } from '@/components/icon'
import { FormSolution } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { QuillEditor } from '@/ui/molecules'
import { Box, Grid, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Solution } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import styled from 'styled-components'

export type Props = {
  data?: Solution
  mutate: (solution: FormSolution) => void
}

function EditorSolution(props: Props) {
  const { data: solution, mutate } = props
  useEffect(() => {
    if (solution === undefined) return
    reset(solution)
  }, [solution])

  const router = useRouter()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({})
  const onSubmit = async (data: FormSolution) => {
    try {
      console.log(data)
      mutate(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Stack direction={'row'} paddingY={'10px'} justifyContent={'flex-end'}>
            <Stack direction={'row'} spacing={4}>
              <ButtonNavbar
                onClick={() => {
                  router.push('/admin/solution', undefined, {
                    shallow: true
                  })
                }}
              >
                <ArrowBackIcon />
                Back
              </ButtonNavbar>
              <ButtonNavbar
                sx={{
                  backgroundColor: 'primary'
                }}
                variant='contained'
                type='submit'
              >
                Save
              </ButtonNavbar>
            </Stack>
          </Stack>
          <Typography fontWeight={600}>Title</Typography>
          <Controller
            name='title'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={!!errors.title}
                helperText={errors.title ? 'Title is required' : ''}
              />
            )}
          />
          <Typography fontWeight={600}>Image</Typography>
          <Controller
            name='image'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={!!errors.image}
                helperText={errors.image ? 'Image is required' : ''}
              />
            )}
          />
          <Typography fontWeight={600}>Description</Typography>
          <Controller
            name='description'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextareaAutosize
                {...field}
                id='description'
                placeholder='write description...'
                minRows={4}
                className='p-2 '
              />
            )}
          />

          <Typography fontWeight={600}>Content</Typography>
          <Controller
            name='content'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => <QuillEditor {...field} />}
          />

          {/* {errors.content && (
            <Typography color='error' variant='caption'>
              Content is required
            </Typography>
          )} */}
        </Stack>
      </form>
    </Container>
  )
}

const Container = styled.div`
  height: 95%;
  overflow: auto;
  padding: 20px 13px 0;
`

export default EditorSolution
