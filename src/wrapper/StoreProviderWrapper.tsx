/** @format */

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { LoadingScreen } from 'components/ui'
import { store, persistor } from 'stores'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

interface StoreProviderProps {
  children: React.ReactNode
}
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
