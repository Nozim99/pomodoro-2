import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timerNumbers",
  initialState: {
    minute: 50,
    second: 0,
    minuteBT: 10,
    changeMinute: 50,
    changeMinuteBT: 10,
  },
  reducers: {
    addMinute: (state, { payload }) => {
      state.minute -= 1;
      if (payload || payload === 0) {
        state.minute = payload;
      }
    },
    addMinuteBT: (state, { payload }) => {
      state.minuteBT -= 1;
      if (payload || payload === 0) {
        state.minuteBT = payload;
      }
    },
    addSecond: (state, { payload }) => {
      if (payload === 0) {
        state.second -= 1;
      } else if (payload === 1) {
        state.second = 59;
      } else if (payload === 2) {
        state.second = 0;
      }
    },

    inputMinute: (state, { payload }) => {
      if (payload >= 0) {
        localStorage.setItem("minute", payload);
        state.changeMinute = +localStorage.getItem("minute");
      }
    },
    inputMinuteBT: (state, { payload }) => {
      if (payload >= 0) {
        localStorage.setItem("minuteBT", payload);
        state.changeMinuteBT = +localStorage.getItem("minuteBT");
      }
    },
    localMinute: (state) => {
      const ls = localStorage.getItem("minute");
      if (ls) {
        state.changeMinute = ls;
      }
    },
    localMinuteBT: (state) => {
      const ls = localStorage.getItem("minuteBT");
      if (ls) {
        state.changeMinuteBT = ls;
      }
    },
    handleMinute: (state, { payload }) => {
      state.minute = payload;
    },
    handleMinuteBT: (state, { payload }) => {
      state.minuteBT = payload;
    },
  },
});
export const {
  addSecond,
  addMinute,
  inputMinute,
  inputMinuteBT,
  addMinuteBT,
  handleMinute,
  handleMinuteBT,
  localMinute,
  localMinuteBT,
} = timerSlice.actions;
export default timerSlice.reducer;
