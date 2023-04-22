import { ArrowBackIcon } from '@/components/icon'
import { FormArticle } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { Button, InputBase, Link, Stack, TextField, Typography } from '@mui/material'
import { Article } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false

import styled from 'styled-components'

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ['clean']
  ]
}

const formats = [
  //'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background'
]

export type Props = {
  data?: Article
  mutate: (article: FormArticle) => void
}

function Editor(props: Props) {
  const { data: article, mutate } = props
  const router = useRouter()
  console.log('article', article)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: article
  })
  const onSubmit = async (data) => {
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
          <Stack direction={'row'} paddingY={'10px'} justifyContent={'space-between'}>
            <Typography variant='h5'>Title</Typography>
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
                  backgroundColor: 'primary',
                }}
                variant='contained'
                type='submit'
              >
                Save
              </ButtonNavbar>
            </Stack>
          </Stack>
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
          <Typography variant='h5'>Content</Typography>
          <Controller
            name='content'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <ReactQuill
                {...field}
                theme='snow'
                modules={modules}
                formats={formats}
                style={{ height: '600px' }}
                // error={!!errors.content}
              />
            )}
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

export default Editor
