import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, Grid } from '@mui/material'
import { availableJobs } from '@/utils/mockupData'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import Link from 'next/link'

type RecruitmentCardProps = {
  jobTitle?: string
  salaryRange?: string
  generalContent?: string
  onSelect: () => void
}

const RecruitmentCard = (props: RecruitmentCardProps) => {
  return (
    <DefaultLayout>
      <Typography variant='h3' paddingTop={10} textAlign='center'>
        Cơ hội việc làm
      </Typography>
      <Grid container spacing={8} padding={8}>
        {availableJobs.map((job) => (
          <Grid key={job.id} item md={12} xs={12}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {job.title}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' gutterBottom>
                  {job.salary}
                </Typography>
                <Link href={`/recruiment/${job.id}`}>Show more</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DefaultLayout>
  )
}

export default RecruitmentCard
