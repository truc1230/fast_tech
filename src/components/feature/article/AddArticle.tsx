import { articleService, userService } from '@/service'
import { FormArticle, FormUser, TApiResponseError, TypeId } from '@/types'
import { Editor } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { User } from 'next-auth'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

type Props = {}

const AddArticle = (props: Props) => {
  const router = useRouter()
  const { id } = router.query
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['article', id],
    queryFn: () => articleService.get(id as string),
    enabled: id !== undefined
  })

  const { mutate, mutateAsync, error } = useMutation({
    mutationFn: (body: FormArticle) => {
      // const id = body.id
      if (id) return articleService.update(Number(id), body)
      else return articleService.create(body)
    },
    onSuccess(data) {
      toast.success(data.data?.message || 'success')
    },
    onError(data: TApiResponseError) {
      toast.error(data?.response?.data?.message || 'error')
    }
  })
  return (
    <AdminLayout>
      <Editor data={data?.data} mutate={mutate} />
    </AdminLayout>
  )
}

export default AddArticle
