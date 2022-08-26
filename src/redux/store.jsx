import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import timerNumbers from "./timerNumbers";
import buttons from "./buttons";
import extra from "./extra";
export const store = configureStore({
  reducer: {
    timerNumbers,
    buttons,
    extra,
  },
  devTools: process.env.NODE_ENV !== "production",
});
