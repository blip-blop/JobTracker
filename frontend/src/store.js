import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/posts/postsSlice";
import userSlice from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    post: postSlice,
    user: userSlice,
  },
});
