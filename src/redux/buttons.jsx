import { createSlice } from "@reduxjs/toolkit";

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState: {
    start: true,
    pomodoro: true,
    settings: 0,
    sound: +localStorage.getItem("sound") || 1,
  },
  reducers: {
    startBtn: (state, {payload}) => {
      state.start = payload;
    },
    pomodoroBtn: (state, {payload}) => {
      state.pomodoro = payload;
    },
    showSettings: (state, { payload }) => {
      state.settings = payload;
    },
    handlerSound: (state, { payload }) => {
      state.sound = payload;
      localStorage.setItem("sound", payload);
    },
  },
});

export const {
  startBtn,
  pomodoroBtn,
  showSettings,
  handlerSound,
} = buttonsSlice.actions;
export default buttonsSlice.reducer;
