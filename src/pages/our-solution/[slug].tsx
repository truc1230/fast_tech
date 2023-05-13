import { getSolutionBySlug, getSolutions } from '@/pages/api/solutions'
import { CardTitle } from '@/ui/molecules'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { Box, Button, Typography } from '@mui/material'
import { Solution } from '@prisma/client'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowBackIcon, ArrowForwardIcon } from '@/components/icon'
import { HtmlTypography } from '@/ui/atom'

type Props = {
  data: Solution
}

const DetailSolution = (props: Props) => {
  const { data } = props
  console.log(data)

  return (
    <DefaultLayout>
      <CardTitle
        title={data?.title || 'Digital solutions for your business'}
        description={
          data?.description ||
          'Thriving in a complex digital world isn’t easy. The ability to continually innovate must be at the core of your organisation. We work with you and your teams to define, structure and build the organisational and technical capabilities needed to transform into a modern digital business. '
        }
        image={`https://media.ngoisao.vn/news/2016/09/16/hot-boy-hot-girl-viet-16-9-2016-ngoisaovn-4-ngoisao.vn.stamp2.jpg`}
      />
      {/* <Typography
        paddingX={10}
        paddingY={8}
        className='py-8 px-4 md:px-20'
        variant='body1'
        dangerouslySetInnerHTML={}
      ></Typography> */}
      <HtmlTypography content={data?.content as string} />
      <Box display={'flex'} padding={12}>
        <Link href={'/our-solution'}>
          <Button>
            <ArrowBackIcon />
            See all solutions
          </Button>
        </Link>
      </Box>
    </DefaultLayout>
  )
}

export default DetailSolution
export async function getStaticPaths() {
  const res = await getSolutions({
    limit: 100
  })

  const paths = res.data.map((item: Solution) => ({
    params: { slug: item.slug }
  }))
  return { paths, fallback: true }
}
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true
    }
  }
  // const res = await articleService.get(params.id as string)
  const result = await getSolutionBySlug(params.slug as string)
  if (!result)
    return {
      notFound: true
    }
  return {
    props: {
      data: JSON.parse(JSON.stringify(result))
    }
  }
}
