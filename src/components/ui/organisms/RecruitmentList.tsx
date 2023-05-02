import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
import { availableJobs } from '@/utils/mockupData'
import Link from 'next/link'
import { Recruitment } from '@prisma/client'

type Props = {
  data: Recruitment[]
}

const RecruitmentList = (props: Props) => {
  const { data } = props
  return (
    <Grid container spacing={8} padding={8}>
      {data.map((job) => (
        <Grid key={job.id} item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5'>
                {job.title}
              </Typography>
              <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                {job.minSalary} - {job.maxSalary}
              </Typography>
              <Link href={`/recruitment/${job.id}`}>Show more</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default RecruitmentList
