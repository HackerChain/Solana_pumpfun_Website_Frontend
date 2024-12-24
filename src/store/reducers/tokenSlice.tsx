import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, TokenState } from "../../types/dashboard/token";

const initialState: TokenState = {
  tokens: [],
  loading: false,
  error: null,
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setTokens, setLoading, setError } = tokenSlice.actions;
export default tokenSlice.reducer;
