import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./State/reducers/authSlice";
import postReducers from "./State/reducers/postReducers";
import userReducers from "./State/reducers/userSlice";

const store = configureStore({
  reducer: {
    post: postReducers,
    auth: authReducer,
    user: userReducers,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
