import { AddIcon } from '@/components/icon'
import { solutionService } from '@/service'
import { QueryParams } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import { TableSolution } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Box, Skeleton, Stack } from '@mui/material'
import { Solution as TSolution } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
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
            onSubmit={function (data: Partial<TSolution>): void {
              throw new Error('Function not implemented.')
            }}
          />
        </>
      )}
    </AdminLayout>
  )
}

export default AdminSolution
