import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  jobTitle: "",
  jobLocation: "",
  jobDescription: "",
  jobDate: "",
};

export const postJob = createAsyncThunk(
  "api/jobs/addjob",
  async (jobData, thunkAPI) => {
    console.log(jobData);
    try {
      axios
        .post("http://localhost:5000/api/jobs/addjob", {
          jobTitle: jobData.jobTitle,
          jobLocation: jobData.jobLocation,
          jobDescription: jobData.jobDescription,
          jobDate: jobData.jobDate,
        })
        .then(function(response) {
          console.log(response);
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

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    post: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { post } = postSlice.actions;
export const postSelector = (state) => state.post;
export default postSlice.reducer;
