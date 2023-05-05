import _ from 'lodash'
import { Solution as TSolution } from '@prisma/client'

import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryParams } from '@/types'
import { getToken } from 'next-auth/jwt'
import removeVietnameseTones from '@/utils/removeVietnameseTones'

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
    const params: QueryParams<TSolution> = req.query
    const { data, total } = await getSolutions(params)

    res.status(200).json({ data, total })
  } catch (error) {
    console.error(error)
    res.status(500).send('Unexpected error occurred')
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { content, title, description, image, slug }: TSolution = req.body
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET })
  console.log('token', token)
  if (token) {
    const result = await prisma.solution.create({
      data: {
        content,
        title,
        description,
        image,
        slug: slug || _.kebabCase(removeVietnameseTones(title))
      }
    })
    return res.json({ data: result, message: 'create successfully' })
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}

export async function getSolutions(params: QueryParams<TSolution>) {
  const {
    limit = 10,
    page = 1,
    order = 'id',
    by = 'asc',
    textSearch
  }: QueryParams<TSolution> = params
  const offset = (page - 1) * limit
  let where = {}
  if (textSearch) {
  }
  const solutions = await prisma.solution.findMany({
    where,
    orderBy: {
      [order]: by
    },
    take: Number(limit),
    skip: offset
  })
  return {
    data: solutions,
    total: await prisma.solution.count({ where })
  }
}

export async function getSolutionBySlug(slug: string) {
  if (_.isEmpty(slug)) return null
  const solutions = await prisma.solution.findMany({
    where: { slug }
  })
  if (_.isEmpty(solutions)) return null
  return solutions[0]
}
