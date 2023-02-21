import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  get_user_from_local_storage,
  add_user_to_local_storage,
  remove_user_from_local_storage,
  get_token_from_local_storage,
} from "../../utils/local_storage/localStorageOperations";
//? Slice functions
import {
  registerUserFunc,
  loginUserFunc,
  updateUserFunc,
} from "./userFunctions";

//? When app loads we check if there is user in local storage, in case the user reloads the page
const initialState = {
  user: get_user_from_local_storage(),
  isLoading: false,
  token: get_token_from_local_storage(),
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserFunc(user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserFunc(user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserFunc(user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    //? Logout user
    logoutCurrentUser: (state, { payload }) => {
      state.user = null;
      state.token = null;
      remove_user_from_local_storage();
      if (payload) {
        toast.success(payload, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    },
  },

  // ? once the data is fetched add it to the state
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    // ! fix
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.data;
      state.token = payload.token;
      add_user_to_local_storage(payload.data, payload.token);
      toast.success(`Hello there ${payload.data.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.data;
      state.token = payload.token;
      state.isLoading = false;
      add_user_to_local_storage(payload.data, payload.token);
      toast.success(`Welcome back ${payload.data.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log("PAYLOAD IN USER SLICE IS FULLFILED", payload);
      toast.success("User has been successfully updated.");
    },
  },
});
export const { logoutCurrentUser } = userSlice.actions;
export default userSlice.reducer;
