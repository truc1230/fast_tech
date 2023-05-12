import { useDebounce } from '@/components/hooks'
import { AddIcon, ArrowBackIcon } from '@/components/icon'
import { articleService } from '@/service'
import { QueryParams, TApiResponseError, TArticleWithAuthor, TypeId } from '@/types'
import { ButtonNavbar } from '@/ui/atom'
import { FormSearch } from '@/ui/molecules'
import { AddUserForm, TableArticle } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Skeleton, Stack } from '@mui/material'
import { Article as TArticle, User } from '@prisma/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const LIMIT = 5
type TResponseGetArticles = {
  data: TArticleWithAuthor[]
  total: number
}
type Props = {}
const AdminArticle = (props: Props) => {
  const [page, setPage] = useState(1)
  const [textSearch, setTextSearch] = useState('')
  const debouncedValue = useDebounce(textSearch, 300)
  const params: QueryParams<TArticle> = {
    page,
    limit: LIMIT,
    textSearch: debouncedValue
  }
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['articles', params],
    queryFn: () => articleService.getAll(params),
    keepPreviousData: true
  })
  const { mutate } = useMutation({
    mutationFn: (id: TypeId) => articleService.delete(id),
    onSuccess(res) {
      // const newUserData = data?.data.data || {}
      queryClient.setQueryData(
        ['articles', params],
        (oldData: TResponseGetArticles | undefined) => {
          const articles = oldData?.data || []
          const adjustedData = articles.filter((article) => article.id !== res.data.data.id)
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
        <>
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
          <Skeleton animation='wave' height={'10%'} />
        </>
      ) : (
        <>
          <Stack direction={'row'} justifyContent={'space-between'} padding={'10px'}>
            <FormSearch textSearch={textSearch} setTextSearch={setTextSearch} />
            <Link href={'/admin/article/add'}>
              <ButtonNavbar>
                <AddIcon />
                Add Article
              </ButtonNavbar>
            </Link>
          </Stack>
          <TableArticle
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

export default AdminArticle
