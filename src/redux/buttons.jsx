import { createSlice } from "@reduxjs/toolkit";

export const buttonsSlice = createSlice({
  name: "buttons",
  initialState: {
    start: true,
    pomodoro: true,
    settings: 0,
    sound: +localStorage.getItem("sound"),
  },
  reducers: {
    startBtn: (state) => {
      state.start = false;
    },
    stopBtn: (state) => {
      state.start = true;
    },
    pomodoroBtn: (state) => {
      state.pomodoro = true;
    },
    breakTimeBtn: (state) => {
      state.pomodoro = false;
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
  stopBtn,
  pomodoroBtn,
  breakTimeBtn,
  showSettings,
  handlerSound,
} = buttonsSlice.actions;
export default buttonsSlice.reducer;
