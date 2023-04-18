import { userService } from '@/service/users.service'
import { TableUser } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {}

const ListUser = (props: Props) => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getAll().then((res) => res.data)
  })
  return (
    <AdminLayout>
      <TableUser data={data} />
    </AdminLayout>
  )
}

export default ListUser
