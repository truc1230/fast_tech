import { RecruitmentList } from '@/ui/organisms'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Typography } from '@mui/material'
import { Recruitment } from '@prisma/client'
import React from 'react'

type Props = {
  data: Recruitment[]
}

const PageRecruitment = (props: Props) => {
  const { data } = props
  return (
    <DefaultLayout>
      <Typography variant='h3' paddingTop={10} textAlign='center' component='div'>
        Cơ hội việc làm
      </Typography>
      <RecruitmentList data={data} />
    </DefaultLayout>
  )
}

export default PageRecruitment
