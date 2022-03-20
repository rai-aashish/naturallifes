import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSqueeze: false,
  isDeviceMobile: false,
};

export const appStatusSlice = createSlice({
  name: "appStatus",
  initialState,
  reducers: {
    setIsSqueeze: (state, action) => {
      state.isSqueeze = action.payload;
    },
    setIsDeviceMobile: (state, action) => {
      state.isDeviceMobile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsDeviceMobile, setIsSqueeze } = appStatusSlice.actions;

export default appStatusSlice.reducer;
