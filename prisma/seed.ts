import { hash } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const password = await hash('123456', 12)
  const admin1 = await prisma.user.upsert({
    where: { username: 'admin01' },
    update: {},
    create: {
      username: 'admin01',
      password,
      name: 'Admin01'
    }
  })
  const admin2 = await prisma.user.upsert({
    where: { username: 'admin02' },
    update: {},
    create: {
      username: 'admin02',
      password,
      name: 'Admin02'
    }
  })
  console.log({ admin1, admin2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
