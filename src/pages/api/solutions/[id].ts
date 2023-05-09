// import prisma from '@/lib/prisma'
import prisma from '@/lib/prisma'
import { TypeId } from '@/types'
import removeVietnameseTones from '@/utils/removeVietnameseTones'
import { Solution } from '@prisma/client'
import _ from 'lodash'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE':
      return handleDELETE(req, res)
    case 'GET':
      return handleGET(req, res)
    case 'PUT':
      return handlePUT(req, res)

    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`)
  }
}

async function handleDELETE(req: NextApiRequest, res: NextApiResponse<any>) {
  const id = Number(req.query.id)
  const result = await getSolution(id)
  if (!result) return res.status(404).json({ message: 'Solution not found' })
  const deleted = await prisma.solution.delete({
    where: { id }
  })
  return res.json({
    message: 'Delete successfully',
    data: {
      id: deleted.id
    }
  })
}
export async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const result = await getSolution(id as string)

  if (!result) return res.status(401).json({ message: 'Solution not found' })
  return res.json({ data: result })
}
async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, description, image, slug }: Partial<Solution> = req.body
  console.log(req.body)
  const { id } = req.query
  const checkSolution = await prisma.solution.findUnique({
    where: { id: Number(id) }
  })

  if (!checkSolution) return res.status(401).json({ message: 'Solution not found' })
  const updatedSlug =
    slug === '' ? _.kebabCase(removeVietnameseTones(title || checkSolution.title)) : slug
  const updateData = {
    title,
    content,
    description,
    image,
    slug: updatedSlug
  }

  const updateUser = await prisma.solution.update({
    where: {
      id: Number(id)
    },
    data: updateData
  })
  return res.json({ data: updateUser, message: 'update successfully' })
}
export async function getSolution(id: TypeId) {
  const checkSolution = await prisma.solution.findUnique({
    where: { id: Number(id) }
  })
  if (!checkSolution) return null
  return checkSolution
}
