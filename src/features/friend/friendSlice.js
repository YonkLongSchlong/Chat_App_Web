import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import friendService from "./friendService";

const initialState = {
  friends: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createFriendRequest= createAsyncThunk(
  "friend/create-friend-request",
  async ({id, recipentId}, thunkAPI) => {
    try {
      return await friendService.createFriendRequest(id, recipentId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const confirmFriendAccept= createAsyncThunk(
  "friend/confirm-friend-request",
  async ({id, requesterId}, thunkAPI) => {
    try {
      return await friendService.confirmFriendAccept(id, requesterId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllFriendsRequest= createAsyncThunk(
  "friend/getAll-friend-request",
  async (id,thunkAPI) => {
    try {
      return await friendService.getAllFriendsRequest(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getFriendsList= createAsyncThunk(
  "friend/get-friend-list",
  async (id,thunkAPI) => {
    try {
      return await friendService.getFriendList(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cancelFriendRequest= createAsyncThunk(
  "friend/cancel-friend-request",
  async ({id, recipentId},thunkAPI) => {
    try {
      return await friendService.cancelFriendRequest(id, recipentId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const declineFriendRequest= createAsyncThunk(
  "friend/decline-friend-request",
  async (id,thunkAPI) => {
    try {
      return await friendService.declineFriendRequest(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAllFriendRequestSented= createAsyncThunk(
  "friend/getAll-friend-request-sented",
  async (id,thunkAPI) => {
    try {
      return await friendService.getAllFriendRequestSented(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

export const friendSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFriendRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFriendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdFriendRequest = action.payload;
      })
      .addCase(createFriendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(confirmFriendAccept.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmFriendAccept.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.confirmFriendAccept = action.payload;
      })
      .addCase(confirmFriendAccept.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllFriendsRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFriendsRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getAllFriendsRequest = action.payload;
      })
      .addCase(getAllFriendsRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getFriendsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriendsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getFriendsList = action.payload;
      })
      .addCase(getFriendsList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(cancelFriendRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cancelFriendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.canceledFriendRequest = action.payload;
      })
      .addCase(cancelFriendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(declineFriendRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(declineFriendRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.declinedFriendRequest = action.payload;
      })
      .addCase(declineFriendRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getAllFriendRequestSented.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFriendRequestSented.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getAllFriendRequestSented = action.payload;
      })
      .addCase(getAllFriendRequestSented.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default friendSlice.reducer;
