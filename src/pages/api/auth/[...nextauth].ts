import { prisma } from '@/lib/prisma'
import NextAuth from 'next-auth'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Invalid credentials')
        }
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (!user) {
          throw new Error('No user Found with Email Please Sign Up...!')
        }

        const checkPassword = await compare(credentials.password, user.password)

        if (!checkPassword) {
          throw new Error("Username or Password doesn't match")
        }

        return user
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt'
  }
})
