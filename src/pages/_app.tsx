/** @format */
import 'react-quill/dist/quill.snow.css'
import '../styles/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { StoreProviderWrapper, ThemeProviderWrappers } from '@/wrapper'
import { SessionProvider } from 'next-auth/react'
import { AuthGuard } from '@/feature/auth/AuthGuard'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <StoreProviderWrapper>
    <SessionProvider session={session}>
      <ThemeProviderWrappers>
        {/* @ts-ignore */}
        {Component.requireAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          // public page
          <Component {...pageProps} />
        )}
        <ReactQueryDevtools initialIsOpen={true} />
        <ToastContainer position='top-center' pauseOnFocusLoss={false} />
      </ThemeProviderWrappers>
    </SessionProvider>
  </StoreProviderWrapper>
)

export default MyApp
