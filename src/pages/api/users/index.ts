import * as _ from 'lodash'
import { User as TypeUser } from '@prisma/client'
import prisma, { prisma } from '../../../lib/prisma'

// import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryParams } from '@/types'
import { hash } from 'bcryptjs'
import { getSession } from 'next-auth/react'
import { getToken } from 'next-auth/jwt'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGET(req, res)
    case 'POST':
      return handlePOST(req, res)
    default:
      throw new Error(`The HTTP ${req.method} method is not supported at this route.`)
  }
}

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.query)
    const {
      limit = 10,
      page = 1,
      order = 'id',
      by = 'asc',
      textSearch
    }: QueryParams<TypeUser> = req.query
    const offset = (page - 1) * limit
    let where = {}
    if (textSearch) {
      where = {
        OR: [
          {
            name: {
              contains: textSearch
            }
          },
          {
            username: {
              contains: textSearch
            }
          }
        ]
      }
    }
    const users = await prisma.user.findMany({
      where,
      orderBy: {
        [order]: by
      },
      take: Number(limit),
      skip: offset
    })

    res.status(200).json({ data: users, total: await prisma.user.count({ where }) })
  } catch (error) {
    console.error(error)
    res.status(500).send('Unexpected error occurred')
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { name, username, role }: TypeUser = req.body
  const checkUser = await prisma.user.findUnique({
    where: { username }
  })
  if (checkUser) return res.status(401).json({ message: 'Username is exist' })
  const user = await prisma.user.create({
    data: { name, username, password: await hash('123456', 12), role }
  })
  return res.json({ data: user, message: 'create successfully' })
}
