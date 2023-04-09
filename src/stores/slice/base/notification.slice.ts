import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TypeNotify = {
  des: string
  status: 'success' | 'error' | 'warning' | 'info'
  open: boolean
  timeout?: number
  id?: string
}
type NotificationState = {
  toasts: TypeNotify[]
}

const InitialState: NotificationState = {
  toasts: [] as TypeNotify[]
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: InitialState,
  reducers: {
    add: (state, action: PayloadAction<TypeNotify>) => {
      state.toasts = [...state.toasts, action.payload]
    },
    pop: (state) => {
      state.toasts = state.toasts.slice(1)
    },
    remove: (state, action: PayloadAction<TypeNotify>) => {
      state.toasts = state.toasts.filter((item) => item.id !== action.payload.id)
    }
  }
})
