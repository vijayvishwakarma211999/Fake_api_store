import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant/reduxConstant";
import { AuthService } from "../service/auth.service";

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
