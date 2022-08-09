import { createSlice } from "@reduxjs/toolkit";
// asp - Auto Start Pomodoro
// asbt - Auto Start Break Time
export const extraSlice = createSlice({
  name: "extra",
  initialState: {
    asp: +localStorage.getItem("asp") || false,
    asbt: +localStorage.getItem("asbt") || false,
    item: +localStorage.getItem("item") || 0,
    className: "for__settings__main d-none",
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
    deleteItems: (state)=>{
      state.item = 0;
      localStorage.setItem("item", 0);
    },
    handleClass: (state, { payload }) => {
      state.className = payload;
    },
  },
});

export const { handleAsp, handleAsbt, handleItem, handleClass, deleteItems } =
  extraSlice.actions;
export default extraSlice.reducer;
