import { AddIcon } from '@/components/icon'
import { solutionService } from '@/service'
import { QueryParams, TApiResponseError, TypeId } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import { TableSolution } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Box, Skeleton, Stack } from '@mui/material'
import { Solution, Solution as TSolution } from '@prisma/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const LIMIT = 5

type Props = {}
const AdminSolution = (props: Props) => {
  const [page, setPage] = useState(1)
  const params: QueryParams<TSolution> = {
    page,
    limit: LIMIT
  }
  const { data, isLoading } = useQuery({
    queryKey: ['solutions', params],
    queryFn: () => solutionService.getAll(params)
  })
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (id: TypeId) => solutionService.delete(id),
    onSuccess(res) {
      // const newUserData = data?.data.data || {}
      queryClient.setQueryData(
        ['solutions', params],
        (oldData: { data: Solution[]; total: number } | undefined) => {
          const solutions = oldData?.data || []
          const adjustedData = solutions.filter((solution) => solution.id !== res.data.data.id)
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
  console.log(data)
  return (
    <AdminLayout>
      {isLoading ? (
        <Box padding={'10px'}>
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
        </Box>
      ) : (
        <>
          <Stack direction={'row'} justifyContent={'space-between'} padding={'10px'}>
            <FormSearch />
            <Link href={'/admin/solution/add'}>
              <ButtonNavbar>
                <AddIcon />
                Add Solution
              </ButtonNavbar>
            </Link>
          </Stack>
          <TableSolution
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

export default AdminSolution
