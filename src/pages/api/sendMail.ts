import { sendEmail, TArgsSendMail } from '@/utils/sendMail'
import * as _ from 'lodash'

// import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    // console.log(req.body)
    await sendEmail({ content: req.body } as TArgsSendMail)
    res.send({ message: 'success' })
  } catch (error) {}
}
