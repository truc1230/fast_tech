import { AddIcon, ArrowBackIcon } from '@/components/icon'
import { articleService } from '@/service'
import { QueryParams } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import { AddUserForm, TableArticle } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Skeleton, Stack } from '@mui/material'
import { Article as TArticle, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
const LIMIT = 5

type Props = {}
const AdminArticle = (props: Props) => {
  const [page, setPage] = useState(1)
  const params: QueryParams<TArticle> = {
    page,
    limit: LIMIT
  }
  const { data, isLoading } = useQuery({
    queryKey: ['articles', params],
    queryFn: () => articleService.getAll(params)
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
            <Link href={'/admin/article/add'}>
              <ButtonNavbar>
                <AddIcon />
                Add Article
              </ButtonNavbar>
            </Link>
            {/* <Link href={'/admin/article/add'}>
              <ButtonNavbar>
                <AddIcon />
                Add Article
              </ButtonNavbar>
            </Link> */}
          </Stack>
          <TableArticle
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

export default AdminArticle
