import { User as TypeUser } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

// import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormUser, QueryParams } from '@/types'
import { hash } from 'bcryptjs'
import _ from 'lodash'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      return handlePUT(req, res)
    case 'GET':
      return handleGET(req, res)
    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`)
  }
}

async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
  const { name, password, role, isActive }: TypeUser = req.body
  console.log(req.body)
  const { id } = req.query
  const checkUser = await prisma.user.findUnique({
    where: { id: Number(id) }
  })

  if (!checkUser) return res.status(401).json({ message: 'User not found' })
  const updateData: FormUser = {}

  if (name) updateData.name = name

  if (role) updateData.role = role

  if (isActive !== undefined) updateData.isActive = isActive

  if (password) updateData.password = await hash(password, 12)

  if (password) {
    updateData.password = await hash(password, 12)
  }
  console.log(updateData)
  const updateUser = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: updateData
  })
  return res.json({ data: updateUser, message: 'update successfully' })
}
async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const checkUser = await prisma.user.findUnique({
    where: { id: Number(id) }
  })

  if (!checkUser) return res.status(401).json({ message: 'User not found' })

  return res.json({ data: checkUser })
}
