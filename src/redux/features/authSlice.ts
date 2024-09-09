import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export type TUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};
type TAuthState = {
  user: null | TUser;
  token: null | string;
  userId: null | string;
  userName: null | string;
};
const initialState: TAuthState = {
  user: null,
  token: null,
  userId: null,
  userName: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token, userId, userName } = action.payload;
      state.user = user;
      state.token = token;
      state.userId = userId;
      state.userName = userName;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
export const useCurrentUserId = (state: RootState) => state.auth.userId;
export const useCurrentUserName = (state: RootState) => state.auth.userName;
