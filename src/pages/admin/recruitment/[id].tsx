import AddRecruitment from '@/feature/recruitment/AddRecruitment'
import React from 'react'

type Props = {}

const EditRecruitmentAdminPage = (props: Props) => {
  return <AddRecruitment />
}

export default EditRecruitmentAdminPage
EditRecruitmentAdminPage.requireAuth = true
