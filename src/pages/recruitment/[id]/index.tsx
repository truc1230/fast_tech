import DefaultLayout from '@/ui/templates/layout/DefaultLayout'

import { useRouter } from 'next/router'
import { getRecruitmentList } from '@/pages/api/recruitments'
import { TypeId } from '@/types'
import { GetStaticProps } from 'next'
import { Recruitment } from '@prisma/client'
import { getRecruitment } from '@/pages/api/recruitments/[id]'
import { DetailRecruitment } from '@/ui/organisms/'

type Props = {
  data: Recruitment
}

const PageDetailRecruitment = (props: Props) => {
  const { data } = props

  return (
    <DefaultLayout>
      <DetailRecruitment data={data} />
    </DefaultLayout>
  )
}
export default PageDetailRecruitment

export async function getStaticPaths() {
  const res = await getRecruitmentList({
    limit: 20
  })

  const paths = res.data.map((item: Recruitment) => ({
    params: { id: item.id.toString() }
  }))
  return { paths, fallback: true }
}
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true
    }
  }
  // const res = await articleService.get(params.id as string)
  const result = await getRecruitment(params.id as TypeId)
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
