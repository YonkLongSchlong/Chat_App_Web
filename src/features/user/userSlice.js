import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userService from "./userService";

const getUserFromSessionStorage = sessionStorage.getItem("User")
  ? JSON.parse(sessionStorage.getItem("User"))
  : null;

const initialState = {
  user: getUserFromSessionStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getUsers = createAsyncThunk(
  "user/get-all-user",
  async (thunkAPI) => {
    try {
      return await userService.getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getaUser = createAsyncThunk(
  "user/get-a-user",
  async (id, thunkAPI) => {
    try {
      return await userService.getaUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/update-profile",
  async (user, thunkAPI) => {
    try {
      return await userService.updateProfile(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const uploadAvatar = createAsyncThunk(
  "user/uploadAvatar",
  async ({id,file}, thunkAPI) => {
    try {
      return await userService.uploadAvatar(id, file);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const findUserByPhones= createAsyncThunk(
  "user/find-user-by-phones",
  async ({ id, phones }, thunkAPI) => {
    try {
      return await userService.findUserByPhones(id,phones);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getaUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getAUser = action.payload;
      })
      .addCase(getaUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(uploadAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(findUserByPhones.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findUserByPhones.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.findUserByPhone = action.payload;
      })
      .addCase(findUserByPhones.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default userSlice.reducer;
