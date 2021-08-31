import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: true,
});
export default store;
