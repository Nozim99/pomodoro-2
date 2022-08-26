import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timerNumbers",
  initialState: {
    second: 0,
    minute: 50,
    minuteBT: 10,
    inputMinute: localStorage.getItem("minute") === null ? 50 : localStorage.getItem("minute"),
    inputMinuteBT: localStorage.getItem("minuteBT") === null ? 10 : localStorage.getItem("minuteBT")
  },
  reducers: {
    minuteF: (state, {payload})=>{
      state.minute = payload
    },
    minuteBTF: (state, {payload})=>{
      state.minuteBT = payload
    },
    inputMinuteF: (state, { payload }) => {
      state.minute = payload
      state.inputMinute = payload
      localStorage.setItem("minute", payload)
    },
    inputMinuteBTF: (state, {payload})=>{
      state.minuteBT = payload
      state.inputMinuteBT = payload
      localStorage.setItem("minuteBT", payload)
    },
    secondF: (state, {payload})=>{
      state.second = payload
    }
  }
});
export const {inputMinuteF, inputMinuteBTF, secondF, minuteF, minuteBTF } = timerSlice.actions;
export default timerSlice.reducer;
