// import prisma from '@/lib/prisma'
import prisma from '@/lib/prisma'
import { FormRecruitment, FormUser, TypeId } from '@/types'
import removeVietnameseTones from '@/utils/removeVietnameseTones'
import _ from 'lodash'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id

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
  const result = await getRecruitment(id)
  if (!result) return res.status(404).json({ message: 'Recruitment not found' })
  const deleted = await prisma.recruitment.delete({
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
  const result = await getRecruitment(id as string)

  if (!result) return res.status(401).json({ message: 'Recruitment not found' })
  return res.json({ data: result })
}
async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
  const { title, minSalary, maxSalary, location, amount, requirement, slug }: FormRecruitment =
    req.body || {}
  console.log(req.body)
  const id = Number.parseInt(req.query.id as string, 10)
  const isExist = await prisma.recruitment.findUnique({
    where: { id }
  })
  if (!title) {
    return res.status(400).json({ message: 'Title is required' })
  }

  if (!isExist) return res.status(401).json({ message: 'Recruitment not found' })
  const updateData = {
    title,
    minSalary: Number(minSalary),
    maxSalary: Number(maxSalary),
    location,
    requirement,
    slug: slug || _.kebabCase(removeVietnameseTones(title)),
    amount: Number(amount)
  }
  const updateUser = await prisma.recruitment.update({
    where: {
      id
    },
    data: updateData
  })
  return res.json({ data: updateUser, message: 'update successfully' })
}
export async function getRecruitment(id: TypeId) {
  const recruitment = await prisma.recruitment.findUnique({
    where: { id: Number(id) }
  })
  if (!recruitment) return null
  return recruitment
}
