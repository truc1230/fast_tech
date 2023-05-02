import { ArrowBackIcon } from '@/components/icon'
import { FormArticle } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { QuillEditor } from '@/ui/molecules'
import { Stack, TextField, Typography } from '@mui/material'
import { Article } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import styled from 'styled-components'

export type Props = {
  data?: Article
  mutate: (article: FormArticle) => void
}

function EditorArticle(props: Props) {
  const { data: article, mutate } = props
  useEffect(() => {
    if (article === undefined) return
    reset(article)
  }, [article])

  const router = useRouter()
  console.log('article', article)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({})
  const onSubmit = async (data: FormArticle) => {
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
                  router.push('/admin/article', undefined, {
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
          <Typography fontWeight={700}>Title</Typography>
          <Controller
            name='title'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                margin={'normal'}
                {...field}
                fullWidth
                error={!!errors.title}
                helperText={errors.title ? 'Title is required' : ''}
              />
            )}
          />

          <Typography fontWeight={700}>Slug</Typography>
          <Typography fontSize={12} fontWeight={300} variant='caption'>
            blank for the default value
          </Typography>
          <Controller
            name='slug'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                margin={'normal'}
                placeholder=' This is path for news, default: /this-is-title-news'
                {...field}
                fullWidth
              />
            )}
          />
          <Typography variant='body2'></Typography>
          <Typography fontWeight={700}>Content</Typography>
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

export default EditorArticle
