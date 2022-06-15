import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const userData = JSON.parse(localStorage.getItem("user"));

const initialState = {
  firstName: userData ? userData.firstName : "",
  lastName: userData ? userData.lastName : "",
  phone: userData ? userData.phone : "",
  email: userData ? userData.email : "",
  password: userData ? userData.password : "",
  city: userData ? userData.city : "",
  zip: userData ? userData.zip : "",
  selectedCity: userData ? userData.selectedCity : "",
  role: userData ? userData.role : "",
};

// Register user
export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      console.log(userData.firstName);
      console.log("before");
      return await userService.register(userData);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();
      console.log(thunkAPI.rejectWithValue(message));
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    reg: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { reg } = userSlice.actions;

export default userSlice.reducer;
