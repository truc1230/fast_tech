/** @format */

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from '@/stores'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface StoreProviderProps {
  children: React.ReactNode
}
const LoadingScreen = () => <div></div>
const queryClient = new QueryClient()
function StoreProvider(props: StoreProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          {props.children}
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  )
}

export default StoreProvider
