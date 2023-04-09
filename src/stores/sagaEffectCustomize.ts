import { AsyncThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { put as sagaPut } from 'redux-saga/effects'

type TypePutAction = AsyncThunkAction<any, void, any>
export const putAsyncThunk = (action: TypePutAction) => {
  return sagaPut(action as unknown as Action<any>)
}
