import { ArrowBackIcon } from '@/components/icon'
import { FormArticle } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { QuillEditor } from '@/ui/molecules'
import removeVietnameseTones from '@/utils/removeVietnameseTones'
import { Stack, TextField, Typography } from '@mui/material'
import { Article } from '@prisma/client'
import _ from 'lodash'
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
    watch,
    setValue,
    formState: { errors }
  } = useForm({})
  const title = watch('title')

  useEffect(() => {
    if (_.isEmpty(title)) return
    setValue('slug', _.kebabCase(removeVietnameseTones(title)))
  }, [title])
  const onSubmit = async (data: FormArticle) => {
    try {
      console.log(data)
      mutate(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
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
          <Controller
            name='slug'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                margin={'normal'}
                disabled
                // placeholder=' This is path for news, default: /this-is-title-news'
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
  )
}



export default EditorArticle
