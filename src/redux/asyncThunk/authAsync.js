import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant/reduxConstant";
import { AuthService, UserSignUpService } from "../service/auth.service";

export const authLoginThunk = createAsyncThunk(
  ASYNC_ROUTES.AUTH_LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AuthService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// user signup
export const userSignUpThunk = createAsyncThunk(
  ASYNC_ROUTES.USERS,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await UserSignUpService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
