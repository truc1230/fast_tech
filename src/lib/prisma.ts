// ts-ignore 7017 is used to ignore the error that the global object is not
// defined in the global scope. This is because the global object is only
// defined in the global scope in Node.js and not in the browser.

import { PrismaClient } from '@prisma/client'
import _ from 'lodash'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

prisma.$use(async (params, next) => {
  // Check incoming query type
  if (_.includes(['User', 'Article', 'Recruitment', 'Solution'], params.model)) {
    if (params.action == 'delete') {
      // Delete queries
      // Change action to an update
      params.action = 'update'
      params.args['data'] = { isDeleted: true }
    }
    if (params.action == 'deleteMany') {
      // Delete many queries
      params.action = 'updateMany'
      if (params.args.data != undefined) {
        params.args.data['isDeleted'] = true
      } else {
        params.args['data'] = { isDeleted: true }
      }
    }
    if (params.action === 'findUnique' || params.action === 'findFirst') {
      // Change to findFirst - you cannot filter
      // by anything except ID / unique with findUnique
      params.action = 'findFirst'
      // Add 'isDeleted' filter
      // ID filter maintained
      params.args.where['isDeleted'] = false
    }
    if (params.action === 'findMany') {
      // Find many queries
      if (params.args.where) {
        if (params.args.where.isDeleted == undefined) {
          // Exclude isDeleted records if they have not been explicitly requested
          params.args.where['isDeleted'] = false
        }
      } else {
        params.args['where'] = { isDeleted: false }
      }
    }
  }
  return next(params)
})

export default prisma
