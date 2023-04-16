import DashboardContent from '@/ui/organisms/DashboardContent'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { GetServerSidePropsContext } from 'next'
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

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        premanent: false
      }
    }
  }
  return {
    props: { session }
  }
}
