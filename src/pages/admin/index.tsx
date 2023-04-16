import DashboardContent from '@/ui/organisms/DashboardContent'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  )
}

export default index
