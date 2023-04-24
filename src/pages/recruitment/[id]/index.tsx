import { ButtonNavbar } from '@/ui/atom'
import { Article } from '@/ui/molecules'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { availableJobs } from '@/utils/mockupData'
import { useRouter } from 'next/router'
import Link from 'next/link'

type TJobInformation = {
  title: string
  salary: string
  location: string
  postedDate: string
  jobDescription: string
  jobRequirements: string
}
type Props = {
  data: TJobInformation
}

const DetailRecruitment = (props: Props) => {
  const { data } = props
  const router = useRouter()
  const { id } = router.query
  let jobSelected = availableJobs.find(function (job) {
    return job.id == id
  })
  return (
    <>
      <DefaultLayout>
        <Box sx={{ margin: 'auto' }}>
          <Grid container width='100vw' spacing={20} marginX='auto'  sx={{'.MuiGrid-item': {paddingX: '40px'}}} >
            <Grid item md={8} xs={12} >
              <Typography variant='h4' sx={{ marginBottom: '20px'}}>
                {jobSelected?.title}
              </Typography>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant='h6'>Mức lương: {jobSelected?.salary}</Typography>
                <Typography variant='h6'>Địa điểm: {jobSelected?.location}</Typography>
                <Typography variant='h6'>Ngày đăng: {jobSelected?.postedDate}</Typography>
              </Box>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant='h6'>Mô tả công việc</Typography>
                <Typography>{jobSelected?.jobDescription}</Typography>
              </Box>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography variant='h6'>Yêu cầu công việc</Typography>
                <Typography>{jobSelected?.jobRequirements}</Typography>
              </Box>
                <Link href={`/recruitment/${id}/apply`} >
                  <ButtonNavbar variant="contained" color="primary" size='large' fullWidth>
                    Ứng tuyển
                  </ButtonNavbar>
                </Link>
            </Grid>
            <Grid item md={4} xs={8} paddingTop={20}>
              <Stack spacing={10}>
                <Article />
                <Article />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </DefaultLayout>
    </>
  )
}
export default DetailRecruitment
