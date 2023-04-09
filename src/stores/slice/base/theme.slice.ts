/** @format */

import {  createSlice } from '@reduxjs/toolkit'
import { THEMES } from '@/utils/constants'


const initialState: {
  themeColor: string
} = {
  themeColor: THEMES.STEEL
}
export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeThemeColor: (state, action) => {
      state.themeColor = action.payload
    }
  }
})
