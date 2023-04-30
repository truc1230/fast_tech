import { recruitmentService } from '@/service'
import { FormArticle, FormRecruitment, TApiResponseError, TypeId } from '@/types'
import { EditorRecruitment } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { Recruitment } from '@prisma/client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

type Props = {}

const AddRecruitment = (props: Props) => {
  const router = useRouter()
  const { id } = router.query
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['recruitment', id],
    queryFn: () => recruitmentService.get(id as string),
    enabled: id !== undefined
  })

  const { mutate, mutateAsync, error } = useMutation({
    mutationFn: (body: FormRecruitment) => {
      // const id = body.id
      if (id) return recruitmentService.update(Number(id), body)
      else return recruitmentService.create(body)
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
      <EditorRecruitment data={data?.data} mutate={mutate} />
    </AdminLayout>
  )
}

export default AddRecruitment
