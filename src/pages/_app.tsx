/** @format */

import '../styles/global.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { StoreProviderWrapper, ThemeProviderWrappers } from '@/wrapper'
import { SessionProvider } from 'next-auth/react'
const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <StoreProviderWrapper>
    <SessionProvider session={session}>
      <ThemeProviderWrappers>
        <Component {...pageProps} />
        <ToastContainer position='top-center' pauseOnFocusLoss={false} />
      </ThemeProviderWrappers>
    </SessionProvider>
  </StoreProviderWrapper>
)

export default MyApp
