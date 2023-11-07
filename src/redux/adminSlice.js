import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//const baseUrl = "http://usman78056-001-site7.gtempurl.com/api/";
const baseUrl = "https://localhost:7240/api/";

//Get Count
export const dashboardCounts = createAsyncThunk(
  "admin/postIndex",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth?.userAuth?.data;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    try {
      const response = await axios.get(`${baseUrl}Admin/PostIndex`, config);
      const data = response?.data?.data;
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Add User
export const addUserAction = createAsyncThunk(
  "user/addUser",
  async (users, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.auth?.userAuth?.data;
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    try {
      const response = await axios.post(
        `${baseUrl}Admin/PostAddUser`,
        users,
        config
      );
      return response?.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Get UsersList
export const usersListAction = createAsyncThunk(
  "user/usersList",
  async (
    { Role, page, size, sortColumn, sortOrder },
    { rejectWithValue, getState, dispatch }
  ) => {
    const user = getState()?.auth?.userAuth?.data;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    };

    try {
      const response = await axios.post(
        `${baseUrl}Admin/GetUsersList?Role=${Role}&currentPage=${page}&perPage=${size}&sortColumn=${sortColumn}&sortDirection=${sortOrder}`,
        null, // Pass null as the second argument, and include config in the third argument
        config
      );
      return response;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const adminSlices = createSlice({
  name: "admin",
  initialState: {
    values: null,
    loading: false,
    appErr: null,
    serverErr: null,
  },
  extraReducers: (builder) => {
    //MiddleWare

    //dashboard
    builder.addCase(dashboardCounts.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(dashboardCounts.fulfilled, (state, action) => {
      state.values = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(dashboardCounts.rejected, (state, action) => {
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      state.loading = false;
    });

    //Add New User
    builder.addCase(addUserAction.pending, (state, action) => {
      state.loading = true;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(addUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(addUserAction.rejected, (state, action) => {
      state.profileAppErr = action?.payload?.message;
      state.profileServerErr = action?.error?.message;
      state.loading = false;
    });

    //Get Users List
    builder.addCase(usersListAction.pending, (state, action) => {
      state.loading = true;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(usersListAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profileAppErr = undefined;
      state.profileServerErr = undefined;
    });
    builder.addCase(usersListAction.rejected, (state, action) => {
      state.profileAppErr = action?.payload?.message;
      state.profileServerErr = action?.error?.message;
      state.loading = false;
    });
  },
});

export default adminSlices.reducer;
