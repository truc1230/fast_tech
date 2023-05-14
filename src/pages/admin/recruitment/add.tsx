import AddRecruitment from '@/feature/recruitment/AddRecruitment'
import React from 'react'

type Props = {}

const AddRecruitmentAdminPage = (props: Props) => {
  return <AddRecruitment />
}

export default AddRecruitmentAdminPage
AddRecruitmentAdminPage.requireAuth = true