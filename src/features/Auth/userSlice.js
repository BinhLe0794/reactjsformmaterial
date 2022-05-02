import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "constants/storage-key";

export const register = createAsyncThunk(
  "user/register",
  async (payload, thunkApi) => {
    //CALL API
    const data = await userApi.register(payload);
    //Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
    //return user data
    return data.user;
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkApi) => {
    //CALL API
    const data = await userApi.login(payload);
    console.log("data login response", data.user);
    //Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
    //return user data
    return data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },
  reducers: {
    logout: (state) => {
      //clear local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      //cap nhat state
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

const useReducer = userSlice.reducer;
export default useReducer;
