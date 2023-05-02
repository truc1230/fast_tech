import { Recruitment } from '@prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryParams } from '@/types'
import { getToken } from 'next-auth/jwt'
import prisma from '@/lib/prisma'

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
    const params: QueryParams<Recruitment> = req.query
    const { data, total } = await getRecruitmentList(params)

    res.status(200).json({ data, total })
  } catch (error) {
    console.error(error)
    res.status(500).send('Unexpected error occurred')
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { title, minSalary, maxSalary, location, amount, requirement }: Omit<Recruitment, 'id'> =
    req.body
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET })
  if (token) {
    if (minSalary > maxSalary || amount < 0) return res.status(400).json({ message: 'Bad request' })
    const result = await prisma.recruitment.create({
      data: {
        title,
        minSalary: +minSalary,
        maxSalary: +maxSalary,
        location,
        requirement,
        amount: +amount
      }
    })
    return res.json({ data: result, message: 'create successfully' })
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}

export async function getRecruitmentList(params: QueryParams<Recruitment>) {
  const {
    limit = 10,
    page = 1,
    order = 'id',
    by = 'asc',
    textSearch
  }: QueryParams<Recruitment> = params
  const offset = (page - 1) * limit
  let where = {}
  if (textSearch) {
    // where = {
    //   OR: [
    //     {
    //       name: {
    //         contains: textSearch
    //       }
    //     },
    //     {
    //       username: {
    //         contains: textSearch
    //       }
    //     }
    //   ]
    // }
  }
  const recruitmentList = await prisma.recruitment.findMany({
    where,
    orderBy: {
      [order]: by
    },
    take: Number(limit),
    skip: offset
  })
  return {
    data: recruitmentList,
    total: await prisma.recruitment.count({ where })
  }
}
