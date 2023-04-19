/** @format */

import '../styles/global.css'

import type { AppProps } from 'next/app'
import { StoreProviderWrapper, ThemeProviderWrappers } from '@/wrapper'
import { SessionProvider } from 'next-auth/react'
const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <StoreProviderWrapper>
    <SessionProvider session={session}>
      <ThemeProviderWrappers>
        <Component {...pageProps} />
      </ThemeProviderWrappers>
    </SessionProvider>
  </StoreProviderWrapper>
)

export default MyApp
