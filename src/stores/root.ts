import { combineReducers } from 'redux'

import { all } from 'redux-saga/effects'
import { notificationSlice, themeSlice } from './slice'

export const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  notification: notificationSlice.reducer
})

export function* rootSaga() {
  yield all([])
}
