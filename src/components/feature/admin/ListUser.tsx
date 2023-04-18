import { userService } from '@/service/users.service'
import { TableUser } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type Props = {}

const ListUser = (props: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getAll().then((res) => res.data),
    refetchOnWindowFocus: false
  })
  return (
    <AdminLayout>
      {isLoading ? (
        <>
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
        </>
      ) : (
        <TableUser data={data} />
      )}
    </AdminLayout>
  )
}

export default ListUser
