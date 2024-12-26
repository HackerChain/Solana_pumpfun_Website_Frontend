import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  fullName: string;
  email: string;
  location: string;
}

const initialState: UserState = {
  fullName: "",
  email: "",
  location: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    clearUserData: () => initialState,
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
