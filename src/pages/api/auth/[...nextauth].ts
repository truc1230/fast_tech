import { prisma } from '@/lib/prisma'
import NextAuth from 'next-auth'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import _ from 'lodash'
// export default NextAuth({
//   secret: process.env.SECRET,
//   providers: [
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         username: { label: 'username', type: 'text' },
//         password: { label: 'password', type: 'password' }
//       },
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         if (!credentials?.username || !credentials?.password) {
//           throw new Error('Invalid credentials')
//         }
//         const user = await prisma.user.findUnique({
//           where: {
//             username: credentials.username
//           }
//         })

//         if (!user) {
//           throw new Error('No user Found with Email Please Sign Up...!')
//         }

//         const checkPassword = await compare(credentials.password, user.password)

//         if (!checkPassword) {
//           throw new Error("Username or Password doesn't match")
//         }
//         console.log('user', user)
//         return user
//       }
//     })
//   ],
//   debug: process.env.NODE_ENV === 'development',
//   session: {
//     strategy: 'jwt'
//   }
// })

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // pages: {
  //   signIn: '/admin/login'
  // },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      //  @ts-ignore
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

        return {
          ..._.omit(user, 'password'),
          email: user.id,
          name: user.name,
          picture: ''
          // username: user.username
        }
      }
    })
  ],
  callbacks: {
    async jwt(args: { token: any; user: any }) {
      const { token, user } = args
      const updateToken = {
        ...token,
        ...user
      }
      return updateToken
    }
  },
  debug: process.env.NODE_ENV === 'development'

  // session: {
  //   // Customize the session object returned by `getSession()`
  //   jwt: true, // Use JSON Web Tokens for session instead of database sessions
  //   maxAge: 30 * 24 * 60 * 60, // How long the session should last in seconds (30 days)
  //   updateAge: 24 * 60 * 60, // How often the session should be updated in seconds (24 hours)
  //   encode: async ({ secret, token, user }) => {
  //     console.log('Encoding session:', { secret, token, user })
  //     const encodedToken = await encode({ secret, token, user })
  //     console.log('Encoded token:', encodedToken)
  //     return {
  //       ...encodedToken,
  //       username: user.username,
  //       id: user.id
  //     }
  //   },
  //   decode: async ({ secret, token, ...rest }) => {
  //     // Return a custom session object that includes the user's username or id
  //     console.log('Decoding session:', { secret, token, ...rest })
  //     const decodedToken = await decode({ secret, token, ...rest })
  //     console.log('Decoded token:', decodedToken)
  //     return {
  //       ...decodedToken,
  //       user: {
  //         ...decodedToken.user,
  //         username: decodedToken.username,
  //         id: decodedToken.id
  //       }
  //     }
  //   }
  // }
}

export default NextAuth(authOptions)
