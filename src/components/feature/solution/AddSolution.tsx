import { solutionService } from '@/service'
import { FormArticle,  TApiResponseError,  } from '@/types'
import {  EditorSolution } from '@/ui/organisms'
import AdminLayout from '@/ui/templates/layout/AdminLayout'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'

type Props = {}

const AddSolution = (props: Props) => {
  const router = useRouter()
  const { id } = router.query
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['solution', id],
    queryFn: () => solutionService.get(id as string),
    enabled: id !== undefined
  })

const { mutate, mutateAsync, error } = useMutation({
    mutationFn: (body: FormArticle) => {
      // const id = body.id
      if (id) return solutionService.update(Number(id), body)
      else return solutionService.create(body)
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
      <EditorSolution data={data?.data} mutate={mutate} />
    </AdminLayout>
  )
}

export default AddSolution
