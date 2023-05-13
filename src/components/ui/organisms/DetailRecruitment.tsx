import { ButtonNavbar } from '@/ui/atom'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Recruitment } from '@prisma/client'
import { formatVND } from '@/utils/formatCurrency'

type Props = {
  data: Recruitment
}

const DetailRecruitment = (props: Props) => {
  const { data } = props
  const router = useRouter()
  const { id } = router.query

  return (
    <Box sx={{ margin: 'auto' }}>
      <Grid
        container
        width='100vw'
        spacing={20}
        marginX='auto'
        padding={7}
        sx={{ '.MuiGrid-item': { paddingX: '40px' } }}
      >
        <Grid item md={8} xs={12}>
          <Typography variant='h4' sx={{ marginBottom: '20px' }}>
            {data?.title}
          </Typography>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant='h6'>
              Mức lương: {formatVND(data?.minSalary)} - {formatVND(data?.maxSalary)}
            </Typography>
            <Typography variant='h6'>Địa điểm: {data?.location}</Typography>
            <Typography variant='h6'>Số lượng tuyển: {data?.amount}</Typography>
          </Box>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant='h6'>Mô tả công việc</Typography>
            <Typography
              variant='body1'
              dangerouslySetInnerHTML={{ __html: data?.requirement as string }}
            ></Typography>
          </Box>
        </Grid>
        <Grid item position={'fixed'} right={0}>
          <Link href={`/recruitment/${id}/apply`}>
            <ButtonNavbar variant='contained' color='primary' size='large' fullWidth>
              Ứng tuyển
            </ButtonNavbar>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
export default DetailRecruitment
