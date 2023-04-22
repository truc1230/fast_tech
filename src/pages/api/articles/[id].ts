// import prisma from '@/lib/prisma'
import prisma from '@/lib/prisma'
import { FormUser, TypeId } from '@/types'
import { Article } from '@prisma/client'
import { hash } from 'bcryptjs'
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

// DELETE /api/post/:id
async function handleDELETE(req: unknown, res: NextApiResponse<any>) {
  return res.json({})
}
export async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const result = getArticle(id as string)

  if (!result) return res.status(401).json({ message: 'Article not found' })
  return res.json({ data: result })
}
async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
  const { title, content }: Partial<Article> = req.body
  console.log(req.body)
  const { id } = req.query
  const checkArticle = await prisma.article.findUnique({
    where: { id: Number(id) }
  })

  if (!checkArticle) return res.status(401).json({ message: 'Article not found' })
  const updateData = { title, content }

  const updateUser = await prisma.article.update({
    where: {
      id: Number(id)
    },
    data: updateData
  })
  return res.json({ data: updateUser, message: 'update successfully' })
}
export async function getArticle(id: TypeId) {
  const checkArticle = await prisma.article.findUnique({
    where: { id: Number(id) }
  })
  if (!checkArticle) return null
  return checkArticle
}
