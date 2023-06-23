import { createSlice } from "@reduxjs/toolkit";
import { authLoginThunk } from "../asyncThunk/authAsync";
import { THUNK_STATUS } from "../constant/reduxConstant";

const initialState = {
  user: null,
  token: null,
  authLoginStatus: null,
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLoginThunk.pending, (state, action) => {
      state.authLoginStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(authLoginThunk.fulfilled, (state, action) => {
      state.authLoginStatus = THUNK_STATUS.SUCCESS;
      state.token = action?.payload?.data;
    });
    builder.addCase(authLoginThunk.rejected, (state, action) => {
      state.authLoginStatus = THUNK_STATUS.FAILED;
    });

 
  },
});
export const { removeToken } = AuthSlice.actions;

export const authState = (state) => state.authState;
export default AuthSlice.reducer;
