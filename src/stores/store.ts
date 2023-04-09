/** @format */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import { PersistedState } from 'redux-persist/es/types'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, rootSaga } from './root'

const PersistVersion = 1
// @see https://github.com/reduxjs/redux-toolkit/issues/121#issuecomment-480621931
// Create a Persist-Config
const persistConfig = {
  key: 'Builder365',
  storage,
  version: PersistVersion,
  whitelist: ['auth', 'theme'],
  blacklist: [],
  migrate: (state: PersistedState) => {
    // eslint-disable-next-line no-underscore-dangle
    if (PersistVersion !== state?._persist.version) {
      return Promise.resolve(null as unknown as PersistedState)
    }
    return Promise.resolve(state)
  }
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const persistor = persistStore(store)

export const getStoreState = store.getState
