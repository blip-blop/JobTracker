import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  city: "",
  zip: "",
  selectedCity: "",
  role: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  token: "",
};

// Register user
export const signupUser = createAsyncThunk(
  "/register",
  async (userData, thunkAPI) => {
    try {
      console.log(userData);
      axios
        .post("http://localhost:5000/api/users/register", {
          firstName: userData.firstName,
          lastName: userData.lastName,
          phone: userData.phone,
          email: userData.email,
          password: userData.password,
          selectedCity: userData.selectedCity,
          zip: userData.zip,
          role: userData.role,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respone.data.message) ||
        error.message ||
        error.toString();
      console.log(thunkAPI.rejectWithValue(message));
    }
  }
);

//login
export const loginUser = createAsyncThunk(
  "api/users/login",
  async (userData, thunkAPI) => {
    console.log(userData);
    try {
      axios
        .post("http://localhost:5000/api/users/login", {
          email: userData.email,
          password: userData.password,
        })
        .then(function(response) {
          console.log(response);
          localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log(state.user);
      state.user = action.data;

      return state;
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state._id = action._id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.selectedCity = action.payload.electedCity;
      state.zip = action.payload.zip;
      state.role = action.payload.role;
      state.password = action.payload.password;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export const { clearState, login } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;
