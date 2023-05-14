import { useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [redirecting, setRedirecting] = useState(false)

  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'unauthenticated') {
    if (!redirecting) {
      setRedirecting(true)
      router.replace('/admin/login')
    }
    return null
  }
  return <>{children}</>
}
