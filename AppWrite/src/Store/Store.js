import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, // Include the auth reducer
  },
});
export default store;
