import { useControlPopup } from '@/components/hooks'
import { AddIcon } from '@/components/icon'
import { userService } from '@/service/users.service'
import { FormUser, QueryParams, TApiResponseError } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import { AddUserForm, TableUser } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Skeleton, Stack } from '@mui/material'
import { User } from '@prisma/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
type Props = {}
type TResponseGetUsers = {
  data: User[]
  total: number
}
const LIMIT = 5
const ListUser = (props: Props) => {
  const [page, setPage] = useState(1)
  const { open, handleClose: handleCloseDialog, handleOpen } = useControlPopup()
  const router = useRouter()
  const queryClient = useQueryClient()
  const params: QueryParams<User> = {
    page,
    limit: LIMIT
  }
  const { data, isLoading } = useQuery({
    queryKey: ['users', params],
    queryFn: () => userService.getAll(params),
    refetchOnWindowFocus: false
  })

  const { mutate, mutateAsync, error } = useMutation({
    mutationFn: (body: FormUser) => {
      const id = body.id
      if (id) return userService.update(Number(id), body)
      else return userService.create(body)
    },
    onSuccess(data) {
      const newUserData = data?.data.data || {}
      queryClient.setQueryData(['users', params], (oldData: TResponseGetUsers | undefined) => {
        const users = oldData?.data || []
        // console.log('users', users)
        const adjustedData = users.map((user: User) =>
          user.id === newUserData.id ? newUserData : user
        )
        const total = oldData?.total || 0
        return {
          data: adjustedData,
          total: total
        }
      })
      toast.success(data.data?.message || 'success')
    },
    onError(data: TApiResponseError) {
      toast.error(data?.response?.data?.message || 'error')
    }
  })

  const handleClose = () => {
    handleCloseDialog()
    if (router.query.id) router.back()
  }

  return (
    <AdminLayout>
      {isLoading ? (
        <>
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
        </>
      ) : (
        <>
          <Stack direction={'row'} justifyContent={'space-between'} padding={'10px'}>
            <FormSearch />
            <ButtonNavbar onClick={handleOpen}>
              <AddIcon />
              Add Account
            </ButtonNavbar>
            <AddUserForm open={open} onClose={handleClose} onSubmit={mutate} />
          </Stack>
          <TableUser
            handleOpen={handleOpen}
            data={data.data}
            total={data.total}
            params={params}
            setPage={setPage}
            onSubmit={mutate}
          />
        </>
      )}
    </AdminLayout>
  )
}

export default ListUser
