import DashboardContent from '@/ui/organisms/DashboardContent'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
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
