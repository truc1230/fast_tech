/** @format */

import '../styles/global.css';

import type { AppProps } from 'next/app';
import { StoreProviderWrapper, ThemeProviderWrappers } from '@/wrapper';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StoreProviderWrapper>
    <ThemeProviderWrappers>
      <Component {...pageProps} />
    </ThemeProviderWrappers>
  </StoreProviderWrapper>
);

export default MyApp;
