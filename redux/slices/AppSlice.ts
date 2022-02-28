import {createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'

export interface appState {
  isLoading: boolean;
  language: string;
}

const initialState: appState = {
  isLoading: true,
  language: 'RU',
}

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  },
  extraReducers: (builder) => {

  }
})
export const { setLoading, setLanguage } = appReducer.actions

export default appReducer.reducer
