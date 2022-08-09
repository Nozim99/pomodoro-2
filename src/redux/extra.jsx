import { createSlice } from "@reduxjs/toolkit";
// asp - Auto Start Pomodoro
// asbt - Auto Start Break Time
export const extraSlice = createSlice({
  name: "extra",
  initialState: {
    asp: +localStorage.getItem("asp") || 0,
    asbt: +localStorage.getItem("asbt") || 0,
    item: +localStorage.getItem("item") || 0,
    className: "for__settings__main d-none",
    settingClass: "Settings pt-3 ",
    startClass: "btn btn-primary mt-4",
  },
  reducers: {
    handleAsp: (state, { payload }) => {
      state.asp = payload;
      localStorage.setItem("asp", payload);
    },
    handleAsbt: (state, { payload }) => {
      state.asbt = payload;
      localStorage.setItem("asbt", payload);
    },
    handleItem: (state, { payload }) => {
      state.item += payload;
      localStorage.setItem("item", state.item);
    },
    deleteItems: (state) => {
      state.item = 0;
      localStorage.setItem("item", 0);
    },
    handleClass: (state, { payload }) => {
      state.className = payload;
    },
    settingClas: (state, { payload }) => {
      state.settingClass = payload;
    },
    startClas: (state, { payload }) => {
      state.startClass = payload;
    },
    
  },
});

export const {
  handleAsp,
  handleAsbt,
  handleItem,
  handleClass,
  deleteItems,
  settingClas,
  startClas,
} = extraSlice.actions;
export default extraSlice.reducer;
