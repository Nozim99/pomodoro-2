import { configureStore } from "@reduxjs/toolkit";
import timerNumbers from "./timerNumbers";
import buttons from "./buttons";
import extra from "./extra";
export const store = configureStore({
  reducer: {
    timerNumbers,
    buttons,
    extra,
  },
});
