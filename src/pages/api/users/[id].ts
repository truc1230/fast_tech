import { User as TypeUser } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

// import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { FormUser, QueryParams } from '@/types'
import { hash } from 'bcryptjs'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'PUT':
      return handlePUT(req, res)
    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`)
  }
}

async function handlePUT(req: NextApiRequest, res: NextApiResponse) {
  const { name, password, role, isActive }: TypeUser = req.body
  const { id } = req.query
  const checkUser = await prisma.user.findUnique({
    where: { id: Number(id) }
  })

  if (!checkUser) return res.status(401).json({ message: 'User not found' })
  const updateData: FormUser = {
    name,
    role,
    isActive
  }
  if (password) {
    updateData.password = await hash(password, 12)
  }
  const updateUser = await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: updateData
  })
  return res.json({ data: updateUser })
}
