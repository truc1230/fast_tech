import * as _ from 'lodash'
import { Article as TArticle } from '@prisma/client'
import { prisma } from '../../../lib/prisma'

// import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryParams } from '@/types'
import { getSession } from 'next-auth/react'
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
    const params: QueryParams<TArticle> = req.query
    const { data, total } = await getArticles(params)

    res.status(200).json({ data, total })
  } catch (error) {
    console.error(error)
    res.status(500).send('Unexpected error occurred')
  }
}

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  const { content, title, slug }: TArticle = req.body
  const token = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET })
  console.log('token', token)
  if (token) {
    const result = await prisma.article.create({
      data: {
        title: title,
        content: content,
        slug: slug || _.kebabCase(removeVietnameseTones(title)),
        authorId: Number(token.email as string)
      }
    })
    return res.json({ data: result, message: 'create successfully' })
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}

export async function getArticles(params: QueryParams<TArticle>) {
  // const response = await fetch(/* external API endpoint */)
  // const jsonData = await response.json()
  // return jsonData
  const {
    limit = 10,
    page = 1,
    order = 'id',
    by = 'desc',
    textSearch
  }: QueryParams<TArticle> = params
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
  const articles = await prisma.article.findMany({
    where,
    orderBy: {
      [order]: by
    },
    include: {
      author: {
        select: {
          id: true,
          name: true
          // image: true
        }
      }
    },
    take: Number(limit),
    skip: offset
  })
  return {
    data: articles,
    total: await prisma.article.count({ where })
  }
}
export async function getArticleBySlug(slug: string) {
  if (_.isEmpty(slug)) return null
  const checkArticle = await prisma.article.findMany({
    where: { slug }
  })
  if (_.isEmpty(checkArticle)) return null
  return checkArticle[0]
}
