import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: true,
  timerPopup: false
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.darkTheme = !state.darkTheme;
    },

    updateTimerPopup: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.timerPopup = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTheme, updateTimerPopup } = appSlice.actions;

export default appSlice.reducer;
