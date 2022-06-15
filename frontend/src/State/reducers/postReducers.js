import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobTitle: "",
  jobLocation: "",
  jobDescription: "",
  jobDate: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: initialState,
  },
  reducers: {
    post: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { post } = postSlice.actions;

export default postSlice.reducer;
