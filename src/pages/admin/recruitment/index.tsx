import AdminRecruitment from '@/feature/recruitment/AdminRecruitment'
import React from 'react'

type Props = {}

const RecruitmentAdminPage = (props: Props) => {
  return <AdminRecruitment />
}

export default RecruitmentAdminPage
RecruitmentAdminPage.requireAuth = true
