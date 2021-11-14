import { createSlice } from "@reduxjs/toolkit";

export const gameListSlice = createSlice({
  name: "gameList",
  initialState: {
    value: 0,
  },
  reducers: {
    addGame: (state) => {
      console.log("addGame");
      state.value += 1;
    },
    removeGame: (state) => {
      console.log("removeGame");
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGame, removeGame } = gameListSlice.actions;

export default gameListSlice.reducer;
