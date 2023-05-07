import { ArrowBackIcon } from '@/components/icon'
import { FormRecruitment } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { QuillEditor } from '@/ui/molecules'
import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import { Recruitment } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import styled from 'styled-components'

export type Props = {
  data?: Recruitment
  mutate: (recruitment: FormRecruitment) => void
}

function EditorRecruitment(props: Props) {
  const { data: recruitment, mutate } = props
  useEffect(() => {
    if (recruitment === undefined) return
    reset(recruitment)
  }, [recruitment])

  const router = useRouter()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({})
  const onSubmit = async (data: FormRecruitment) => {
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
                router.push('/admin/recruitment', undefined, {
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

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Min Salary</Typography>
            <Controller
              name='minSalary'
              control={control}
              defaultValue=''
              rules={{ pattern: /^[0-9]*$/ }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  error={!!errors.minSalary}
                  helperText={errors.minSalary && 'Please enter a valid number'}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Max Salary</Typography>
            <Controller
              name='maxSalary'
              control={control}
              defaultValue=''
              rules={{ pattern: /^[0-9]*$/ }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  error={!!errors.maxSalary}
                  helperText={errors.maxSalary && 'Please enter a valid number'}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Location</Typography>
            <Controller
              name='location'
              control={control}
              defaultValue=''
              render={({ field }) => <TextField {...field} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Amount</Typography>
            <Controller
              name='amount'
              control={control}
              defaultValue=''
              rules={{ pattern: /^[0-9]*$/ }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  error={!!errors.amount}
                  helperText={errors.amount && 'Please enter a valid number'}
                />
              )}
            />
          </Grid>
        </Grid>

        <Typography variant='h5'>Requirement</Typography>
        <Controller
          name='requirement'
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

export default EditorRecruitment
