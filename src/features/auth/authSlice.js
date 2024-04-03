import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const getTokenFromLocalStorage = localStorage.getItem("User")
  ? JSON.parse(localStorage.getItem("User"))
  : null;
  
const initialState = {
    user: getTokenFromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user,thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
      try {
        return await authService.login(user);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  export const logout = createAsyncThunk(
    "auth/logout",
    async (thunkAPI) => {
      try {
        return await authService.logout();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.error;
      })
      
  },
});

export default authSlice.reducer;

