import React from 'react'
import DefaultLayout from '@/ui/templates/layout/DefaultLayout'
import { getRecruitmentList } from '@/pages/api/recruitments'
import { Recruitment } from '@prisma/client'
import PageRecruitment from '@/feature/recruitment/PageRecruitment'

type RecruitmentCardProps = {
  recruitment: Recruitment[]
}

const Recruitment = (props: RecruitmentCardProps) => {
  return <PageRecruitment data={props.recruitment} />
}

export default Recruitment

export async function getStaticProps() {
  const res = await getRecruitmentList({
    limit: 20
  })
  return {
    props: {
      recruitment: JSON.parse(JSON.stringify(res.data))
    }
  }
}
