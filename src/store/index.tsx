import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import tokenReducer from "./reducers/tokenSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    // assets: assetsReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
