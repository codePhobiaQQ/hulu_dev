import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

export interface appState {
  isLoading: boolean;
  language: string;
  isThanksOpen: boolean;
}

const initialState: appState = {
  isLoading: true,
  isThanksOpen: false,
  language: "RU",
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setThanksOpen: (state, action: PayloadAction<boolean>) => {
      state.isThanksOpen = action.payload;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  extraReducers: (builder) => {},
});
export const { setLoading, setLanguage, setThanksOpen } = appReducer.actions;

export default appReducer.reducer;
