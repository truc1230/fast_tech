import { AddIcon } from '@/components/icon'
import {  recruitmentService } from '@/service'
import { QueryParams } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import TableRecruitment from '@/ui/organisms/TableRecruitment'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Skeleton, Stack } from '@mui/material'
import { Recruitment, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
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
  console.log(data)
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
            // handleOpen={function (): void {
            //   throw new Error('Function not implemented.')
            // }}
            onSubmit={function (data: Partial<User>): void {
              throw new Error('Function not implemented.')
            }}
          />
        </>
      )}
    </AdminLayout>
  )
}

export default AdminRecruitment
