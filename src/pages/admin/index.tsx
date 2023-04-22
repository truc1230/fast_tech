import DashboardContent from '@/ui/organisms/DashboardContent'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { GetServerSidePropsContext } from 'next'
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

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req })
  console.log('session', session)
  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        premanent: false
      }
    }
  }
  return {
    props: { session }
  }
}
