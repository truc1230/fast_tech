import { AddIcon } from '@/components/icon'
import { recruitmentService } from '@/service'
import { QueryParams, TApiResponseError, TypeId } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import TableRecruitment from '@/ui/organisms/TableRecruitment'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Skeleton, Stack } from '@mui/material'
import { Recruitment, User } from '@prisma/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const LIMIT = 5

type Props = {}
const AdminRecruitment = (props: Props) => {
  const [page, setPage] = useState(1)
  const params: QueryParams<Recruitment> = {
    page,
    limit: LIMIT
  }
  const { data, isLoading } = useQuery({
    queryKey: ['recruitments', params],
    queryFn: () => recruitmentService.getAll(params)
  })
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (id: TypeId) => recruitmentService.delete(id),
    onSuccess(res) {
      // const newUserData = data?.data.data || {}
      queryClient.setQueryData(
        ['recruitments', params],
        (oldData: { data: Recruitment[]; total: number } | undefined) => {
          const recruitments = oldData?.data || []
          const adjustedData = recruitments.filter(
            (recruitment) => recruitment.id !== res.data.data.id
          )
          const total = oldData?.total || 0
          return {
            data: adjustedData,
            total: total - 1
          }
        }
      )
      toast.success(res.data?.message || 'delete success')
    },
    onError(data: TApiResponseError) {
      toast.error(data?.response?.data?.message || 'error')
    }
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
        <>
          <Stack direction={'row'} justifyContent={'space-between'} padding={'10px'}>
            <FormSearch />
            <Link href={'/admin/recruitment/add'}>
              <ButtonNavbar>
                <AddIcon />
                Add Recruitment
              </ButtonNavbar>
            </Link>
          </Stack>
          <TableRecruitment
            data={data?.data}
            params={params}
            setPage={setPage}
            total={data?.total}
            handleDelete={mutate}
          />
        </>
      )}
    </AdminLayout>
  )
}

export default AdminRecruitment
